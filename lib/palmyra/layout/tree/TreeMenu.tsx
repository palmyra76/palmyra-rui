import { useNavigate } from "react-router-dom";
import { Tree as TreeType } from "../../store/Types";
import { NodeApi, Tree } from "react-arborist";
import { useEffect, useState } from "react";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import { getIcon } from "../flexiLayout/IconProvider";
import './TreeMenu.css';


interface MenuDef extends TreeType<MenuDef> {
    name: string,
    title?: string
    path?: string,
    children?: MenuDef[],
    icon?: string,
    isExternal?: boolean;
}

export type { MenuDef };

interface TreeMenuInput {
    data: MenuDef[]
}


const getLabelIcon = (node: NodeApi<MenuDef>): any => {
    if (node.data.icon)
        return getIcon(node.data.icon);
}

const getFolderIcon = (node: NodeApi<MenuDef>): any => {
    if (node.isLeaf)
        return;
    return node.isOpen ? ArrowDropDown : ArrowRight;
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

export default function TreeMenu(props: TreeMenuInput) {
    const navigate = useNavigate();
    const [menu, setMenu] = useState<MenuDef[]>(props.data);

    useEffect(() => {
        setMenu(props.data);
    }, [props.data]);

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

