const type = () => {
    return (
        <ul>
            <li>type: string | string[]</li>
            <li>errorMsg: string | Record&lt;string, string&gt;</li>
            <br />
            <li>regex: RegExp</li>
            <li>errorMsg: string</li>
            <br />
            <li>validateFn: (data: any) =&gt; boolean</li>
            <li>errorMsg: string</li>
        </ul>
    )
}

const typeDes = () => {
    return (<>
        <ul>
            <li>Some defult type "email", "mobilePhone", "alphabets", "string".</li>
            <li>Error Message for type error.</li>
            <br />
            <li>Regex are patterns used to match character combinations in strings.</li>
            <li>Error Message for regex.</li>
            <br />
            <li>Custom function for validation.</li>
            <li>Error Message for custom function.</li>
        </ul>
    </>
    )
}

const length = () => {
    return (
        <ul>
            <li>min: number</li>
            <li>max: number</li>
            <li>errorMsg: string</li>
        </ul>
    )
}

const lengthDes = () => {
    return (<>
        <ul>
            <li>Specify the minimum word length.</li>
            <li>Specify the maximum word length.</li>
            <li>Error Message for length validation.</li>
        </ul>
    </>
    )
}


const range = () => {
    return (
        <ul>
            <li>start: number</li>
            <li>end: number</li>
            <li>errorMsg: string</li>
        </ul>
    )
}

const rangeDes = () => {
    return (<>
        <ul>
            <li>Specify the start range of number input.</li>
            <li>Specify the end range of number input.</li>
            <li>Error Message for length validation.</li>
        </ul>
    </>
    )
}

export { type, typeDes, length, lengthDes, range, rangeDes }