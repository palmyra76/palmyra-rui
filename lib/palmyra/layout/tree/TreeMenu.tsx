
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { TreeView, TreeItem } from "@mui/x-tree-view";


interface MenuDef {
    name: string,
    label?: string
    path?: string,
    children?: MenuDef[],
    icon?: string,
    isExternal?: boolean
}

export type { MenuDef };

export default function TreeMenu({ appRoutes }) {
    const navigate = useNavigate();

    const StyledTreeItem = styled(TreeItem)`
    .MuiTreeItem-iconContainer {
        
      }
    `;

    const renderTree = (parent, node: MenuDef, index) => {
        if (node.name) {
            let path = parent ? parent + "/" + node.path : node.path;
            if (node.children) {
                return (<StyledTreeItem key={index} nodeId={node.name} label={node.name}>
                    {Array.isArray(node.children)
                        ? node.children.filter((node) => node.name)
                            .map((childNode, index) => renderTree(path, childNode, index))
                        : null}
                </StyledTreeItem>);
            } else {
                return (<StyledTreeItem key={index} nodeId={node.name} label={node.name}
                    onClick={(e) => { navigate(path); }} />);
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
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: "70vh", flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            {menu}
        </TreeView>
    );
}
