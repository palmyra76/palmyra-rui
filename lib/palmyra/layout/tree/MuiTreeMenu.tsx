import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { TreeView, TreeItem } from "@mui/x-tree-view";
import { MenuDef } from "..";
import './MuiXTreeMenu.css';
import { IconProvider, SimpleIconProvider } from "../flexiLayout/IconProvider";
import { useEffect, useState } from "react";
import { TreeMenuInput } from "./types";


const getTitle = (d: MenuDef) => {
    return d.title ? d.title : d.name;
}

export default function MuiTreeMenu(props: TreeMenuInput) {
    const appRoutes = props.data;
    const sidebarWidth = props.sidebarWidth;
    const iconProvider: IconProvider = props.iconProvider || SimpleIconProvider;

    const navigate = useNavigate();
    const [isParentExpanded, setIsParentExpanded] = useState([]);

    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [hoveredItem, setHoveredItem] = useState<MenuDef | null>(null);

    const handleMouseEnter = (node: MenuDef, e: React.MouseEvent<HTMLDivElement>) => {
        setHoveredItem(node);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleSelectItem = (node: MenuDef) => {
        const path = node.path;
        localStorage.setItem("selectedMenuItem", path);
        setSelectedItem(path);
        navigate(path);
    };

    useEffect(() => {
        const storedSelectedItem = localStorage.getItem("selectedMenuItem");

        if (storedSelectedItem) {
            setSelectedItem(storedSelectedItem);

        }
    }, [appRoutes]);

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
        const isSelected = selectedItem === node.path;
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
                        className={`mui-tree ${isSelected ? 'selected' : ''}`}
                        label={(
                            <>
                                {!sidebarWidth && (
                                    <div className="mui-tree-menu">
                                        <div
                                            className="mui-tree-menu-list" >
                                            {LabelIcon ? <LabelIcon className="mui-label-icon" /> : <></>}
                                            {getTitle(node)}

                                        </div>
                                        <div className="mui-arrow-icon" >
                                            <ChevronRightIcon style={iconStyles} />
                                        </div>
                                    </div>
                                )}
                                {sidebarWidth && (
                                    <div className="mui-sidebar-minimize-tree-menu-list" onMouseEnter={(e) => handleMouseEnter(node,e)} onMouseLeave={handleMouseLeave}>
                                        {LabelIcon ? <LabelIcon className='mui-sidebar-minimize-label-icon' /> : <></>}
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
                    <StyledTreeItem className={`mui-tree ${isSelected ? 'selected' : ''}`}
                        key={index} nodeId={node.name} label={(
                            <div onClick={(e) => { handleSelectItem(node); }} className="mui-tree-menu-list">
                                {!sidebarWidth && (
                                    <>
                                        {LabelIcon ? <LabelIcon className="mui-label-icon" /> : <></>}
                                        {getTitle(node)}
                                    </>
                                )}
                                {sidebarWidth && (
                                    <div className="mui-sidebar-minimize-tree-menu-list">
                                        {LabelIcon ? <LabelIcon className='mui-sidebar-minimize-label-icon' /> : <></>}
                                    </div>)}
                            </div>
                        )} />
                );
            }
        }
    };

    const renderDropdown = () => {
        if (hoveredItem && hoveredItem.children) {
            return (
                <div className="dropdown-menu">
                    {hoveredItem.children.map((childNode, index) => (
                        <div key={index} className="dropdown-item" onClick={() => handleSelectItem(childNode)}>
                            {getTitle(childNode)}
                        </div>
                    ))}
                </div>
            )
        }};
        const renderMenu = (appRoutes) => {
            return appRoutes.filter((node) => node.name)
                .map((route, index) => (renderTree(null, route, index)));
        }

        const menu = renderMenu(appRoutes);
        return (
            <div>
                <TreeView
                    aria-label="rich object"
                    defaultExpanded={['Simple Layout Demo']}
                    sx={{ height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                    {menu}
                </TreeView>
                <div style={{overflow:'auto'}}>
                { hoveredItem && renderDropdown()}
                </div>
                
            </div>
        );
    }