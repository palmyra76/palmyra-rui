import { MutableRefObject, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { TreeQueryStore } from "../../store";
import { AiOutlineLoading } from "react-icons/ai";
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { INode } from "react-accessible-treeview";
import cx from "classnames";

import "./AsyncTreeMenu.css";
import { IChildTreeRequest } from "../../store/palmyra/PalmyraTreeStore";
import AsyncTreeCrudDropDown from "./AsyncTreeCrudDropDown";
import { ClickAwayListener } from "@mui/material";
import { IEndPoint } from "..";
import { StoreFactory } from "../flexiLayout/Types";

interface IAsyncTreeEditorInput {
    storeFactory: StoreFactory<IChildTreeRequest>
    endPoint: IEndPoint,
    groupId: number,
    readOnly?: boolean
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

interface IAsyncTreeMenuEditor {
    getValue: () => Node
}

const AsyncTreeMenuEditor = forwardRef(function AsyncTreeMenuEditor(props: IAsyncTreeEditorInput, ref: MutableRefObject<IAsyncTreeMenuEditor>) {
    const groupId = props.groupId;
    const loadedAlertElement = useRef(null);
    const currentRef = ref ? ref : useRef<IAsyncTreeMenuEditor>(null);

    let rootNode: INode = { name: "", id: -1, parent: null, children: [], isBranch: true };
    const [data, setData] = useState<INode[]>([rootNode]);
    const [selectedIds, setSelectedIds] = useState([]);
    const store: TreeQueryStore<IChildTreeRequest, any> = props.storeFactory.getTreeStore({ groupId: groupId }, props.endPoint);

    useImperativeHandle(currentRef, () => {
        return {
            getValue() {
                return getValue();
            }
        };
    }, [groupId, data, selectedIds]);


    const updateTreeData = (list, id, children) => {
        const data = list.map((node) => {
            if (node.id === id && !node.loaded) {
                node.loaded = true;
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
                loaded: true,
                metadata: { menuCode: d.code }
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
    }, [groupId]);

    const getValue = () => {
        const mappedData = {};
        const result: any = {
            name: 'root',
            children: [],
            id: -1
        }

        data.forEach((d: INode) => {
            if (d.metadata?.selected == undefined)
                return;
            //@ts-ignore
            const parent = d.parent > 0 ? d.parent : null;
            mappedData[d.id] = {
                menuId: d.id, parent, name: d.name, mask: d.metadata?.selected,
                menuCode: d.metadata?.menuCode, children: []
            }
            //@ts-ignore
            if (null == parent && d.id > 0) {
                result.children.push(mappedData[d.id]);
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

        return result;
    }

    return (
        <>
            <div>
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
                            if (element.metadata) {
                                element.metadata.selected = selected;
                            } else
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

                            const handleClick = (e: any) => {
                                if (!props.readOnly) {
                                    handleSelect(e);
                                    e.stopPropagation
                                }
                            }

                            return (
                                <div
                                    {...getNodeProps({ onClick: handleExpand })}
                                >
                                    <CheckBoxIcon
                                        className="checkbox-icon"
                                        onClick={handleClick}
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
});

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

export default AsyncTreeMenuEditor;
export type { IAsyncTreeEditorInput, IAsyncTreeMenuEditor }