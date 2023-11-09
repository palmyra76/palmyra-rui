import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { TreeView, TreeItem } from "@mui/x-tree-view";
import { MenuDef } from "..";
import './MuiXTreeMenu.css';
import { IconProvider, SimpleIconProvider } from "../flexiLayout/IconProvider";
import { useState } from "react";
import { TreeMenuInput } from "./types";


const getTitle = (d: MenuDef) => {
    return d.title ? d.title : d.name;
}



export default function MuiTreeMenu(props: TreeMenuInput) {
    const appRoutes = props.data;
    const sidebarWidth = props.sidebarWidth;
    const iconProvider: IconProvider = props.iconProvider || SimpleIconProvider;

    const navigate = useNavigate();
    const [isParentExpanded, setIsParentExpanded] = useState({});

    const getLabelIcon = (node: MenuDef): any => {
        if (node.icon)
            return iconProvider.getIcon(node.icon);
    }

    const StyledTreeItem = styled(TreeItem)`
              
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
        if (node.name) {
            let path = node.path;

            const iconStyles = {
                transform: isParentExpanded[node.name] ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
            };

            if (node.children) {
                return (
                    <StyledTreeItem key={index} nodeId={node.name}
                        label={(
                            <>
                                {!sidebarWidth && (
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
                                {sidebarWidth && (
                                    <div className="sidebar-minimize-tree-menu-list">
                                        {LabelIcon ? <LabelIcon className='sidebar-minimize-label-icon' /> : <></>}
                                    </div>
                                )}
                            </>

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
                    <StyledTreeItem
                        key={index} nodeId={node.name} label={(
                            <div onClick={(e) => { navigate(path); }} className="tree-menu-list">
                                {!sidebarWidth && (
                                    <>
                                        {LabelIcon ? <LabelIcon className="label-icon" /> : <></>}
                                        {getTitle(node)}
                                    </>
                                )}
                                {sidebarWidth && (
                                    <div className="sidebar-minimize-tree-menu-list">
                                        {LabelIcon ? <LabelIcon className='sidebar-minimize-label-icon' /> : <></>}
                                    </div>)}
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