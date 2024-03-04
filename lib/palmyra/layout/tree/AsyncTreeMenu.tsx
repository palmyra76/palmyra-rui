import { useEffect, useRef, useState } from "react";
import { TreeQueryStore } from "../../store";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosArrowForward  } from "react-icons/io";
import TreeView, { INode, ITreeViewOnSelectProps } from "react-accessible-treeview";
import cx from "classnames";

import "./AsyncTreeMenu.css";
import { IChildTreeRequest } from "../../store/palmyra/PalmyraTreeStore";
import { useNavigate } from "react-router-dom";

interface IAsyncTreeMenuInput {
    store: TreeQueryStore<IChildTreeRequest, any>
}

export default function AsyncTreeMenu(props: IAsyncTreeMenuInput) {
    const navigate = useNavigate();
    const loadedAlertElement = useRef(null);
    let rootNode = { name: "", id: -1, parent: null, children: [], isBranch: true };
    const [data, setData] = useState([rootNode]);
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
                loaded: true,
                metadata: {
                    code: d.code, action:d.action
                }
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
    }, []);

    const navigateTo = (element: INode) => {
        if(!element.isBranch && element.metadata?.code){
            console.log(element);
            //@ts-ignore
            const target:string = element.metadata.code;
            navigate(target);
        }
    }

    return (
        <>
            <div className="sidebar-asyn-menu">
                <div
                    className="visually-hidden"
                    ref={loadedAlertElement}
                    role="alert"
                    aria-live="polite"
                ></div>
                <div className="checkbox">
                    <TreeView className="async-tree-menu-container"
                        data={data}
                        aria-label="Checkbox tree"
                        multiSelect
                        propagateSelect
                        togglableSelect
                        propagateSelectUpwards
                        onSelect={(props: ITreeViewOnSelectProps) => {
                            console.log(props);
                        }}
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
                            return (
                                <div
                                    {...getNodeProps({ onClick: handleExpand })}
                                style={{ marginLeft: 5 * (level - 1)}}
                                >
                                    <div className="async-tree-menu-list" onClick={() => navigateTo(element)}>
                                        <div className="async-tree-menu-list-text-container">
                                            <div className="menu-icon">I</div>
                                            <span className="menu-name">{element.name}</span>
                                        </div>
                                        <div className="async-tree-menu-list-arrow-container">
                                            {isBranch && branchNode(isExpanded, element)}
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
    return <IoIosArrowForward  className={classes} />;
};