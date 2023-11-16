
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IEndPoint } from "../layout/Types";
import { ColumnDefinition } from ".";
import { TableLayout } from "../layout/flexiLayout";
import { topic } from "../core/topic";
import { StringFormat } from "../utils";


interface IPalmyraGridInput {
    pageName: string,
    fields:ColumnDefinition[],
    endPoint: IEndPoint
    idKey:string
}


const usePalmyraPageGrid = (props: IPalmyraGridInput) => {
    const navigate = useNavigate();
    const viewTopic = props.pageName + "/viewPage";
    const newTopic = props.pageName + "/newPage";

    const layout: TableLayout = {
        fields: props.fields,
        quickSearch: '',
        storeOptions:{
            endPoint: props.endPoint
        },
        actionOptions:{
            onClick:{
                topic:viewTopic
            },
            newRecord:{
                topic:newTopic
            }
        }        
    }

    useEffect(() => {
        var viewPageHandle = topic.subscribe(viewTopic, (topicName, data) => {
            data.id = data[props.idKey];
            navigate(StringFormat('view/{id}', data));
        });

        var newPageHandle = topic.subscribe(newTopic, (topicName, data) => {
            console.log(data);
            navigate(StringFormat('new', data));
        });

        return () => {
            topic.unsubscribe(viewPageHandle);
            topic.unsubscribe(newPageHandle);
        }
    }, [props.idKey]);

    return {layout}
}

export {usePalmyraPageGrid}