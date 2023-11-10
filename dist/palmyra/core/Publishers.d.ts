import { LayoutParams } from "../../main";
import { ActionOptions } from "../layout/Types";
/**
 * Returns a function to publish a message, this shall be called on onClick event.
 *
 * @param actionOptions
 * @param layoutParams
 * @returns
 */
declare function getActionPublishers(actionOptions: ActionOptions, layoutParams: LayoutParams): {
    onClick?: Function;
    onNewClick?: Function;
};
export { getActionPublishers };
