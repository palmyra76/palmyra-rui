import { renderTitle } from "../../mui/widget/InfoTooltip";
import { TabContainerInput } from "../flexiLayout/Types";

const TabContainer = (props: TabContainerInput) => {

    const title = props.title;

    return (
        <div>
            <h2>{renderTitle(title)}</h2>
            {props.children}
        </div>
    )
}

export default TabContainer;