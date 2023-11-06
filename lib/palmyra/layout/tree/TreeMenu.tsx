import { useNavigate } from "react-router-dom";
import { NodeApi, Tree } from "react-arborist";
import { useEffect, useState } from "react";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import { IconProvider, SimpleIconProvider} from "../flexiLayout/IconProvider";
import './TreeMenu.css';
import { MenuDef, TreeMenuInput } from "./types";


const getFolderIcon = (node: NodeApi<MenuDef>): any => {
    if (node.isLeaf)
        return;
    return node.isOpen ? ArrowDropDown : ArrowRight;
}

export default function TreeMenu(props: TreeMenuInput) {
    const navigate = useNavigate();
    const [menu, setMenu] = useState<MenuDef[]>(props.data);
    const iconProvider:IconProvider = props.iconProvider || SimpleIconProvider;

    useEffect(() => {
        setMenu(props.data);
    }, [props.data]);

    const getLabelIcon = (node: NodeApi<MenuDef>): any => {
        if (node.data.icon)
            return iconProvider.getIcon(node.data.icon);
    }

    const Node: any = ({ node, style, dragHandle }) => {
        var ArrowIcon = getFolderIcon(node);
        var LabelIcon = getLabelIcon(node);
    
        return (<div className="tree-menu"
            onClick={() => node.isInternal && node.toggle()}
        >
            <div className="tree-menu-list" style={{ ...style }}
    
                ref={dragHandle}>
                {LabelIcon ? <LabelIcon className="label-icon" /> : <></>}
                <div>
                    {node.data.name}
                </div>
    
            </div>
            {ArrowIcon ?
                <div className="arrow-icon">
                    <ArrowIcon />
                </div> : <div />}
    
        </div>
        );
    }

    return (
        <Tree initialData={menu}
            padding={0}
            width={'100%'}
            rowHeight={40}
            height={500}
            idAccessor='name'
            childrenAccessor={(d: MenuDef) => { return d.children }}
            onSelect={(selected) => {
                var path = selected[0]?.data?.path;
                navigate(path);
            }}
        >
            {Node}
        </Tree>
    );
}

