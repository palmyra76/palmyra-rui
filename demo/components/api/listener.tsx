const eventListener = () => {
    return (
        <ul>
            <li>onChange: (key: string, value: any, valid?: boolean) =&gt; void</li>
            <br />
            <li>onBlur: (key: string, value: any, valid?: boolean) =&gt; void</li>
        </ul>
    )
}

const eventListenerDes = () => {
    return (<>
        <ul>
            <li>When the value of an input field has been changed, it waits for an event to occur and then responds to it.</li>
            <br />
            <li>When the input field loses focus, it waits for an event to occur and then responds to it.</li>
        </ul>
    </>
    )
}

const valueListener = () => {
    return (
        <ul>
            <li>onValue: (key: string, value: any, valid?: boolean) =&gt; void</li>
        </ul>
    )
}

const valueListenerDes = () => {
    return (<>
        <ul>
            <li>When the value of an input field, it waits for an event to occur and then responds to it.</li>
        </ul>
    </>
    )
}

export { eventListener, eventListenerDes, valueListener, valueListenerDes }