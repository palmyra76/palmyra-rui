import '../../layout/container/FormLayout.css';

const calcContainerClass = () => {
    var containerClass = 'palmyra-form-field-container';
    return containerClass;
}

var calcFieldLabelClass = () => {
    var labelClass = 'palmyra-form-field-label';
    var fieldClass = 'palmyra-form-field-data';
    return { labelClass, fieldClass };
}

type FieldContainerProps = {
    title: any,
    children: any,
    column?: any
}

const MuiFieldContainer = ({ title, children }: FieldContainerProps) => {
    const containerClass = calcContainerClass() + '  palmyra-form-field-container-3column';
    const { labelClass, fieldClass } = calcFieldLabelClass();

    return (
        <div className={containerClass}>
            <div className={labelClass}>
                {title}
            </div>
            <div className={fieldClass}>
                {children}
            </div>
        </div>
    )
}

export default MuiFieldContainer;