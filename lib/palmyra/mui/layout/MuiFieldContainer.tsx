import './FormLayout.css';

const calcContainerClass = () => {
    var containerClass = 'palmyra-form-field-container';
    // if (options && options.columns) {
    //     switch (options.columns) {
    //         case 2:
    //         case '2':
    //             if (field.columnWrap && field.columnWrap > 1)
    //                 return containerClass;
    //             return containerClass + ' palmyra-form-field-container-2column';
    //         case 3:
    //         case '3':
    //             return containerClass + ' palmyra-form-field-container-3column';
    //         case 4:
    //         case '4':
    //             return containerClass + ' palmyra-form-field-container-4column';
    //     }
    // }
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