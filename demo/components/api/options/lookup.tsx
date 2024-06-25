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


const defaultQueryParams = () => {
    return (
        <ul>
            <li>filter: Record&lt;any, any&gt;</li>
            <br />
            <li>sort: strings</li>
        </ul>
    )
}

const defaultQueryParamsDes = () => {
    return (<>
        <ul>
            <li>A lookup filter is used to restrict or limit the data that can be retrieved or displayed based on specified conditions.</li>
            <br />
            <li>Lookup sort organizes data into a specified order, like alphabetical or numerical</li>
        </ul>
    </>
    )
}

export { lookupOptions, lookupOptionsDes, storeOptions, storeOptionsDes, defaultQueryParams, defaultQueryParamsDes }