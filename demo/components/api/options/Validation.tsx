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

const dateRange = () => {
    return (
        <ul>
            <li>minDate: object</li>
            <li>maxDate: object</li>
        </ul>
    )
}

const dateRangeDes = () => {
    return (<>
        <ul>
            <li>Minimal selectable date.</li>
            <li>Maximal selectable date.</li>
        </ul>
    </>
    )
}

const sliderProps = () => {
    return (
        <ul>
            <li>disableSwap: boolean</li>
            <li>valueLabelDisplay: 'auto' | 'on' | 'off'</li>
            <li>min: number</li>
            <li>max: number</li>
            <li>step: number</li>
            <li>marks: boolean | ValueLabel[]</li>
        </ul>
    )
}

const sliderPropsDes = () => {
    return (<>
        <ul>
            <li>When you're dragging one slider, passing the pointer over another slider won't change the one you're currently dragging.</li>
            <li>Controls when the value label is displayed: Default 'auto'
                <ul>
                    <li>'auto' the value label will display when the thumb is hovered or focused.</li>
                    <li>'on' will display persistently.</li>
                    <li>'off' will never display.</li>
                </ul>
            </li>
            <li>The minimum allowed value of the slider. Should not be equal to max.</li>
            <li>The maximum allowed value of the slider. Should not be equal to min.</li>
            <li>The step defines how the slider increments between its minimum and maximum values, ensuring it stops at specific intervals.</li>
            <li>Slider marks guide where to position the handle accurately and conveniently.</li>
        </ul>
    </>
    )
}

export {
    type, typeDes, length, lengthDes, range, rangeDes,
    dateRange, dateRangeDes, sliderProps, sliderPropsDes
}