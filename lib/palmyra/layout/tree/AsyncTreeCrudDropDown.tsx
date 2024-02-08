import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";

interface drodownInput {
    handleSelect?: any,
    isHalfSelected?: boolean,
    isSelected?: boolean,
}
const AsyncTreeCrudDropDown = (props: drodownInput) => {
    const handleSelect = props.handleSelect;
    const isHalfSelected = props.isHalfSelected;
    const isSelected = props.isSelected;
    return (
        <div className="crud-dropdown-content">
            <div className="crud-checkbox-list">
                <div className="crud-checkbox">
                    <div>
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
                    </div>
                    <div>
                        <span className="crud-checkbox-label">Create</span>
                    </div>
                </div>
                <div className="crud-checkbox">
                    <div>
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
                    </div>
                    <div>
                        <span className="crud-checkbox-label">Update</span>
                    </div>
                </div>
                <div className="crud-checkbox">
                    <div>
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
                    </div>
                    <div>
                        <span className="crud-checkbox-label">Delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsyncTreeCrudDropDown

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