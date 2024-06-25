const view = () => {
    return (
        <ul>
            <li>displayAttribute *: string</li>
            <li>lookupOptions:
                <ul>
                    <li>idAttribute: string</li>
                    <li>displayAttribute: string</li>
                </ul>
            </li>
        </ul>
    )
}

const viewDes = () => {
    return (<>
        <ul>
            <li>Display attribute is used to help users easily recognize and interpret the data.</li>
            <li>
                <ul>
                    <li>Id attribute is database table primary column.</li>
                    <li>Display attribute is used to help users easily recognize and interpret the data.</li>
                </ul>
            </li>
        </ul>
    </>
    )
}


export { view, viewDes }