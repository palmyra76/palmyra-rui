
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TopicListener, topic } from "./topic";

function setKeyValue<T>(key: string, value: T) {
    topic.publish('_keyValue-' + key, value);
}

function useKeyValue<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(defaultValue);

    const l: TopicListener<T> = (_topic: string, data: T) => {
        setValue(data);
    }

    useEffect(() => {
        var handle = topic.subscribe('_keyValue-' + key, l)
        return () => { topic.unsubscribe(handle) }
    }, [])

    return [value, setValue]
}

export { useKeyValue, setKeyValue };