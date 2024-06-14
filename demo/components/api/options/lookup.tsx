const lookupOptions = () => {
    return (
        <ul>
            <li>idAttribute: string</li>
            <br />
            <li>displayAttribute: string  </li>
        </ul>
    )
}

const lookupOptionsDes = () => {
    return (<>
        <ul>
            <li>Id attribute is database table primary column.</li>
            <br />
            <li>Display attribute is used to help users easily recognize and interpret the data.</li>
        </ul>
    </>
    )
}

const storeOptions = () => {
    return (
        <ul>
            <li>endPoint: string | query: string | get: string | post: string | put: string | delete: string</li>
            <br />
            <li>endPointOptions: Record&lt;string, any&gt;</li>
        </ul>
    )
}

const storeOptionsDes = () => {
    return (<>
        <ul>
            <li>The Api url of the lookup.</li>
            <br />
            <li>Send the property to endpoint.</li>
        </ul>
    </>
    )
}


export { lookupOptions, lookupOptionsDes, storeOptions, storeOptionsDes }