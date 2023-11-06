import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { TreeView, TreeItem } from "@mui/x-tree-view";
import { MenuDef } from "..";
import { getIcon } from "../flexiLayout/IconProvider";
import { useState } from "react";

const getTitle = (d: MenuDef) => {
    return d.title ? d.title : d.name;
}
const getLabelIcon = (node: MenuDef): any => {
    if (node.icon)
        return getIcon(node.icon);
}
export default function MuiTreeMenu({ appRoutes }) {
    const navigate = useNavigate();
    const [isParentExpanded, setIsParentExpanded] = useState({});

    const StyledTreeItem = styled(TreeItem)`
        .css-1bcfi89-MuiTreeItem-content .MuiTreeItem-iconContainer {
            dispaly:none;
            width:0px;
            margin:0;
            padding:35px 0px 0px 0px;
            
        }
        .css-1bcfi89-MuiTreeItem-content{
            padding:4px;
        }
    `;

    const toggleNode = (node: MenuDef) => {
        const updatedExpansion = { ...isParentExpanded };
        updatedExpansion[node.name] = !updatedExpansion[node.name];
        setTimeout(() => {
            setIsParentExpanded(updatedExpansion);
        }, 250);
    }

    const renderTree = (parent, node: MenuDef, index) => {
        var LabelIcon = getLabelIcon(node);
        // console.log("node", node);
        if (node.name) {
            let path = parent ? parent + "/" + node.path : node.path;

            const iconStyles = {
                transform: isParentExpanded[node.name] ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
            };

            if (node.children) {
                return (
                    <StyledTreeItem key={index} nodeId={node.name} label={(
                        <div style={{ justifyContent: 'space-between', width: '100%', display: 'flex' }}>
                            <div className="tree-menu-list">
                                {LabelIcon ? <LabelIcon className="label-icon" /> : <></>}
                                {getTitle(node)}
                            </div>
                            <div className="arrow-icon" >
                                <ChevronRightIcon style={iconStyles} />
                            </div>
                        </div>

                    )}
                        onClick={() => toggleNode(node)}
                    >
                        {Array.isArray(node.children)
                            ? node.children.filter((childNode) => childNode.name)
                                .map((childNode, index) => renderTree(path, childNode, index))
                            : null}
                    </StyledTreeItem>
                );
            } else {
                return (
                    <StyledTreeItem key={index} nodeId={node.name} label={(
                        <div onClick={(e) => { navigate(path); }} className="tree-menu-list">
                            {LabelIcon ? <LabelIcon className="label-icon" /> : <></>}
                            {getTitle(node)}
                        </div>
                    )} />
                );
            }
        }
    };

    const renderMenu = (appRoutes) => {
        return appRoutes.filter((node) => node.name)
            .map((route, index) => (renderTree(null, route, index)));
    }

    const menu = renderMenu(appRoutes);
    return (
        <TreeView
            aria-label="rich object"
            defaultExpanded={['root']}
            sx={{ height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            {menu}
        </TreeView>
    );
}