import { LayoutParams } from "../../../main";
import { ActionOptions, PublishAction } from "../../layout/Types";
import { StringFormat, mergeDeep } from "..";
import { topic } from "./topic";

/**
 * Returns a function to publish a message, this shall be called on onClick event.
 * 
 * @param actionOptions 
 * @param layoutParams 
 * @returns 
 */
function getActionPublishers(actionOptions: ActionOptions, layoutParams: LayoutParams) {
    var result: {
        onClick?: Function,
        onNewClick? : Function
    } = {};

    const params = mergeDeep({}, layoutParams);
    var onClickOption = actionOptions?.onClick;
    var onNewOption = actionOptions?.newRecord;

    if (onClickOption) {
        result.onClick = getOnClickPublisher(onClickOption, params);
    }

    if(onNewOption){
        result.onNewClick = getOnClickPublisher(onNewOption, params);
    }

    return result;
}

/**
 * Returns a function to publish the data into the topic
 * 
 * @param option 
 * @param params 
 * @returns 
 */
function getOnClickPublisher(option: PublishAction, params: any) {
    const messageFormat = option.messageFormat;
    const topicFormat = option.topic;

    return function (data: any): void {
        const env = mergeDeep({}, params, data);
        const topicKey = StringFormat(topicFormat, env);

        if (messageFormat) {
            const message = StringFormat(messageFormat, env);
            topic.publish(topicKey, message);
        }
        else
            topic.publish(topicKey, env);
    }
}


export { getActionPublishers };