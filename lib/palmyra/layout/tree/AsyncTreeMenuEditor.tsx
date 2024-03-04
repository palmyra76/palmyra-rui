import { useEffect, useRef, useState } from "react";
import { TreeQueryStore } from "../../store";
import { AiOutlineLoading } from "react-icons/ai";
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { INode } from "react-accessible-treeview";
import cx from "classnames";

import "./AsyncTreeMenu.css";
import { IChildTreeRequest } from "../../store/palmyra/PalmyraTreeStore";
import AsyncTreeCrudDropDown from "./AsyncTreeCrudDropDown";
import { Button, ClickAwayListener } from "@mui/material";

interface IAsyncTreeEditorInput {
    store: TreeQueryStore<IChildTreeRequest, any>
}

interface Node {
    id: number,
    parent: number,
    name: string,
    loaded: boolean,
    isBranch: true,
    children: (Node | number)[],
    selected: 0 | 1 | 2;
}

export default function AsyncTreeMenuEditor(props: IAsyncTreeEditorInput) {

    const loadedAlertElement = useRef(null);
    let rootNode: INode = { name: "", id: -1, parent: null, children: [], isBranch: true };
    const [data, setData] = useState<INode[]>([rootNode]);
    const [selectedIds, setSelectedIds] = useState([]);

    const store: TreeQueryStore<IChildTreeRequest, any> = props.store;

    const updateTreeData = (list, id, children) => {
        const data = list.map((node) => {
            if (node.id === id && !node.loaded) {
                node.loaded = true
                node.children = children.filter((e) => id == e.parent).map((el) => {
                    return el.id;
                });
            }
            return node;
        });
        return data.concat(children);
    };

    const getChildId = (ids: string): number[] => {
        const idList: string[] = ids.split(",");
        return idList.map((s) => {
            return parseInt(s);
        })
    }

    const convert = (nodes, parentId) => {
        const result = nodes.map((d) => {
            const childIds: string = d.children || "";
            return {
                id: d.id,
                name: d.name,
                parent: d.parent ? d.parent : parentId,
                children: d.children ? getChildId(d.children) : [],
                isBranch: childIds.length > 0,
                loaded: true
            }
        });

        return result;
    };

    useEffect(() => {
        store.getRoot().then((d) => {
            var nodes: any[] = convert(d.result, -1);
            const sd = updateTreeData(data, -1, nodes);
            setData(sd);
            setSelectedIds([5, 7]); // TODO   update based on the server side value.
        });
    }, []);


    const submit = () => {

        const mappedData = {};
        const result: Node[] = [];

        data.forEach((d: INode) => {
            if (d.metadata?.selected == undefined)
                return;
            //@ts-ignore
            const parent = d.parent > 0 ? d.parent : null;
            mappedData[d.id] = {
                id: d.id, parent, name: d.name, selected: d.metadata?.selected, children: []
            }
            //@ts-ignore
            if (null == parent && d.id > 0) {
                result.push(mappedData[d.id]);
            }
        });

        data.forEach((v: INode) => {
            const parentId = v.id;
            const parentNode = mappedData[parentId];
            if (parentNode && v.children) {
                v.children.forEach((id) => {
                    const childNode = mappedData[id];
                    if (childNode)
                        parentNode.children.push(childNode);
                })
            }
        })
    }

    return (
        <>
            <div>

                <Button onClick={submit} >ellosdf</Button>

                <div
                    className="visually-hidden"
                    ref={loadedAlertElement}
                    role="alert"
                    aria-live="polite"
                ></div>
                <div className="checkbox">
                    <TreeView
                        data={data}
                        selectedIds={selectedIds}
                        aria-label="Checkbox tree"
                        multiSelect
                        propagateSelect
                        togglableSelect
                        propagateSelectUpwards
                        nodeRenderer={({
                            element,
                            isBranch,
                            isExpanded,
                            isSelected,
                            isHalfSelected,
                            getNodeProps,
                            level,
                            handleSelect,
                            handleExpand,
                        }) => {
                            const selected = isHalfSelected ? 1 : isSelected ? 2 : 0;
                            element.metadata = { selected: selected };

                            const branchNode = (isExpanded, element) => {
                                return isExpanded && element.children.length === 0 ? (
                                    <>
                                        <span
                                            role="alert"
                                            aria-live="assertive"
                                            className="visually-hidden"
                                        >
                                            loading {element.name}
                                        </span>
                                        <AiOutlineLoading
                                            aria-hidden={true}
                                            className="loading-icon"
                                        />
                                    </>
                                ) : (
                                    <ArrowIcon isOpen={isExpanded} />
                                );
                            };

                            return (
                                <div
                                    {...getNodeProps({ onClick: handleExpand })}
                                >
                                    <CheckBoxIcon
                                        className="checkbox-icon"
                                        onClick={(e) => {
                                            handleSelect(e);
                                            e.stopPropagation();
                                        }}
                                        variant={
                                            isHalfSelected ? "some" : isSelected ? "all" : "none"
                                        }
                                    />
                                    <div className="menu-list">
                                        <div className="text-icon">
                                            {/* <div>I</div> */}
                                            <span className="menu-name">{element.name}</span>
                                        </div>
                                        <div>
                                            {isBranch ? branchNode(isExpanded, element) :
                                                <>
                                                    <LeafNode element={element} isSelected={isSelected} />

                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </>
    );
}

interface IArrowIconInput {
    isOpen: boolean,
    className?: string
}

const ArrowIcon = (props: IArrowIconInput) => {
    const { isOpen, className } = props;
    const baseClass = "arrow";
    const classes = cx(
        baseClass,
        { [`${baseClass}--closed`]: !isOpen },
        { [`${baseClass}--open`]: isOpen },
        className
    );
    return <IoMdArrowDropright className={classes} />;
};

const CheckBoxIcon = ({ variant, ...rest }) => {
    switch (variant) {
        case "all":
            return <FaCheckSquare style={{ color: 'rgb(44, 134, 213)', backgroundColor: 'white' }}{...rest} />;
        case "none":
            return <FaSquare style={{ color: 'white', border: '1px solid rgba(128, 128,128, 0.2)' }} {...rest} />;
        case "some":
            return <FaMinusSquare style={{ color: 'rgb(44, 134, 213)', backgroundColor: 'white' }} {...rest} />;
        default:
            return null;
    }
};

interface ILeafNodeProps {
    isSelected: boolean,
    element: any
}

const LeafNode = (props: ILeafNodeProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelect = () => {

    }

    return <>
        <div className="crud-dropdown-container" >
            <span className="crud-dropdown-text" onClick={toggleDropdown}>crud
            </span>
            {dropdownOpen && (
                <ClickAwayListener onClickAway={() => { setDropdownOpen(false) }}>
                    <div>
                        <AsyncTreeCrudDropDown isHalfSelected={props.isSelected}
                            isSelected={props.isSelected} handleSelect={handleSelect} />
                    </div>
                </ClickAwayListener>
            )}
        </div>
    </>
}