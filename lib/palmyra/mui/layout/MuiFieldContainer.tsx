import '../../layout/container/FormLayout.css';

const calcContainerClass = (column: any) => {
    var containerClass = 'palmyra-form-field-container' + ' palmyra-form-field-container-2column';
    if (column) {
        switch (column) {
            case 2:
            case '2':
                return containerClass + ' palmyra-form-field-container-2column';
            case 3:
            case '3':
                return containerClass + ' palmyra-form-field-container-3column';
            case 4:
            case '4':
                return containerClass + ' palmyra-form-field-container-4column';
            default:
                return containerClass + ' palmyra-form-field-container-2column';
        }
    }
    return containerClass;
}

var calcFieldLabelClass = (column: any) => {
    var labelClass = 'palmyra-form-field-label';
    var fieldClass = 'palmyra-form-field-data';

    if (column && column.topLabel) {
        return {
            labelClass: 'palmyra-form-field-label palmyra-form-field-label-topLabel',
            fieldClass: 'palmyra-form-field-data palmyra-form-field-data-topLabel'
        }
    } else {
        return { labelClass, fieldClass };
    }
}

type FieldContainerProps = {
    title: any,
    children?: any,
    column?: any
}

const MuiFieldContainer = ({ title, children, column }: FieldContainerProps) => {
    const containerClass = calcContainerClass(column);
    const { labelClass, fieldClass } = calcFieldLabelClass(column);

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