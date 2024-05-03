import { useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import { IFormFieldManager, IGetFieldManager, IOptionsViewDefinition } from '../../form/interface';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import { ISelectField } from '../../form/interfaceFields';
import { getFieldLabel } from '../form/MuiUtil';
import FieldDecorator from '../form/FieldDecorator';

const OptionsView = forwardRef(function MuiSelect(props: IOptionsViewDefinition, ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ISelectField>(null);
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';

    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'select', currentRef);
    const data = fieldManager.getData();

    useImperativeHandle(currentRef, () => ({
        getValue() {
            return fieldManager.getData();
        },
    }), [fieldManager]);

    return (
        <>{fieldManager.mutateOptions.visible &&
            <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
                customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                <div className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div style={{ textAlign: textAlign }}
                       className={props.label ? (variant === 'outlined' ? "text-view-value-outlined" : "text-view-value") : ''}>
                        {props.options[data]}
                    </div>
                </div>
            </FieldDecorator>}
        </>
    );
});

export default OptionsView;
