import { useEffect, useRef, useState } from "react";
import { TreeQueryStore } from "../../store";
import { AiOutlineLoading } from "react-icons/ai";
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView from "react-accessible-treeview";
import cx from "classnames";

import "./AsyncTreeMenu.css";
import { IChildTreeRequest } from "../../store/palmyra/PalmyraTreeStore";
import AsyncTreeCrudDropDown from "./AsyncTreeCrudDropDown";
import { ClickAwayListener } from "@mui/material";

interface IAsyncTreeEditorInput {
    store: TreeQueryStore<IChildTreeRequest, any>
}

// type MenuData = INode;


export default function AsyncTreeMenuEditor(props: IAsyncTreeEditorInput) {

    const loadedAlertElement = useRef(null);
    let rootNode = { name: "", id: -1, parent: null, children: [], isBranch: true };
    const [data, setData] = useState([rootNode]);
    const [nodesAlreadyLoaded, setNodesAlreadyLoaded] = useState([]);
   
    const store: TreeQueryStore<IChildTreeRequest, any> = props.store;

    const updateTreeData = (list, id, children) => {
        const data = list.map((node) => {
            if (node.id === id) {
                node.loaded = true
                node.children = children.map((el) => {
                    return el.id;
                });
            }
            return node;
        });
        return data.concat(children);
    };

    const convert = (nodes, parentId) => {
        const result = nodes.map((d) => {
            const childIds: string = d.children || "";
            return {
                id: d.id,
                name: d.name,
                parent: parentId,
                children: [],
                isBranch: childIds.length > 0,
                loaded: false
            }
        });

        return result;
    };

    useEffect(() => {
        store.getRoot().then((d) => {
            var nodes: any[] = convert(d.result, -1);
            const sd = updateTreeData(data, -1, nodes);
            setData(sd);
        });
    }, [])

    const onLoadData = ({ element }) => {
        const parent = element.id;
        return store.getChildren({ parent }).then((d) => {
            var nodes: any[] = convert(d.result, parent);
            const sd = updateTreeData(data, parent, nodes);
            setData(sd);
        });
    };

    const wrappedOnLoadData = async (props) => {
        const nodeHasNoChildData = props.element.children.length === 0;
        const nodeHasAlreadyBeenLoaded = nodesAlreadyLoaded.find(
            (e) => e.id === props.element.id
        );
        if (!props.element.loaded)
            await onLoadData(props);

        if (nodeHasNoChildData && !nodeHasAlreadyBeenLoaded) {
            const el = loadedAlertElement.current;
            setNodesAlreadyLoaded([...nodesAlreadyLoaded, props.element]);
            el && (el.innerHTML = `${props.element.name} loaded`);

            // Clearing aria-live region so loaded node alerts no longer appear in DOM
            setTimeout(() => {
                el && (el.innerHTML = "");
            }, 5000);
        }
    };

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
                        aria-label="Checkbox tree"
                        onLoadData={wrappedOnLoadData}
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

    
                            // const renderCrudCheckbox = () => (
                            //     <>
                            //         <div className="crud-checkbox-list">
                            //             <div className="crud-checkbox">
                            //                 <div>
                            //                     <CheckBoxIcon
                            //                         className="checkbox-icon"
                            //                         onClick={(e) => {
                            //                             handleSelect(e);
                            //                             e.stopPropagation();
                            //                         }}
                            //                         variant={
                            //                             isHalfSelected ? "some" : isSelected ? "all" : "none"
                            //                         }
                            //                     />
                            //                 </div>
                            //                 <div>
                            //                     <span className="crud-checkbox-label">Create</span>
                            //                 </div>
                            //             </div>
                            //             <div className="crud-checkbox">
                            //                 <div>
                            //                     <CheckBoxIcon
                            //                         className="checkbox-icon"
                            //                         onClick={(e) => {
                            //                             handleSelect(e);
                            //                             e.stopPropagation();
                            //                         }}
                            //                         variant={
                            //                             isHalfSelected ? "some" : isSelected ? "all" : "none"
                            //                         }
                            //                     />
                            //                 </div>
                            //                 <div>
                            //                     <span className="crud-checkbox-label">Update</span>
                            //                 </div>
                            //             </div>
                            //             <div className="crud-checkbox">
                            //                 <div>
                            //                     <CheckBoxIcon
                            //                         className="checkbox-icon"
                            //                         onClick={(e) => {
                            //                             handleSelect(e);
                            //                             e.stopPropagation();
                            //                         }}
                            //                         variant={
                            //                             isHalfSelected ? "some" : isSelected ? "all" : "none"
                            //                         }
                            //                     />
                            //                 </div>
                            //                 <div>
                            //                     <span className="crud-checkbox-label">Delete</span>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </>);

                            // const renderCrudCheckboxes: any =
                            //     <>
                            //         <div className="crud-checkbox-list">
                            //             <div className="crud-checkbox">
                            //                 <div>
                            //                     <CheckBoxIcon
                            //                         className="checkbox-icon"
                            //                         onClick={(e) => {
                            //                             handleSelect(e);
                            //                             e.stopPropagation();
                            //                         }}
                            //                         variant={
                            //                             isHalfSelected ? "some" : isSelected ? "all" : "none"
                            //                         }
                            //                     />
                            //                 </div>
                            //                 <div>
                            //                     <span className="crud-checkbox-label">Create</span>
                            //                 </div>
                            //             </div>
                            //             <div className="crud-checkbox">
                            //                 <div>
                            //                     <CheckBoxIcon
                            //                         className="checkbox-icon"
                            //                         onClick={(e) => {
                            //                             handleSelect(e);
                            //                             e.stopPropagation();
                            //                         }}
                            //                         variant={
                            //                             isHalfSelected ? "some" : isSelected ? "all" : "none"
                            //                         }
                            //                     />
                            //                 </div>
                            //                 <div>
                            //                     <span className="crud-checkbox-label">Update</span>
                            //                 </div>
                            //             </div>
                            //             <div className="crud-checkbox">
                            //                 <div>
                            //                     <CheckBoxIcon
                            //                         className="checkbox-icon"
                            //                         onClick={(e) => {
                            //                             handleSelect(e);
                            //                             e.stopPropagation();
                            //                         }}
                            //                         variant={
                            //                             isHalfSelected ? "some" : isSelected ? "all" : "none"
                            //                         }
                            //                     />
                            //                 </div>
                            //                 <div>
                            //                     <span className="crud-checkbox-label">Delete</span>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </>;


                            return (
                                <div
                                    {...getNodeProps({ onClick: handleExpand })}
                                    style={{ marginLeft: 40 * (level - 1) }}
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
                                                <LeafNode element={element} isSelected={isSelected}/>
                                                    
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
            return <FaCheckSquare {...rest} />;
        case "none":
            return <FaSquare {...rest} />;
        case "some":
            return <FaMinusSquare {...rest} />;
        default:
            return null;
    }
};

interface ILeafNodeProps {
    isSelected:boolean,
    element:any
}

const LeafNode = (props:ILeafNodeProps)=>{
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