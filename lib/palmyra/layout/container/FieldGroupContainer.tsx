
interface FormFieldContainerInput {
    columns?: 2 | 3 | 4 | number,
    children: any
}

const FieldGroupContainer = (props: FormFieldContainerInput) => {
    const containerClass = props.columns ?
        "palmyra-field-group-container palmyra-field-group-container-" + props.columns + "columns"
        : "palmyra-field-group-container";

    return (<>
        <div className={containerClass}>
            {props.children}
        </div>
    </>)
}

export default FieldGroupContainer;