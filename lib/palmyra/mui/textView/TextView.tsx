import { forwardRef, useRef, useContext } from 'react';
import { IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from '../form/FieldDecorator';
import { copyMuiOptions, getFieldLabel } from '../form/MuiUtil';
import './TextView.css';
import { ITextViewDefinition } from '../../PalmyraForm/interface';

const TextView = forwardRef(function MuiLabelDisplay(props: ITextViewDefinition, ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef: any = ref ? ref : useRef(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'string', currentRef);
    const { mutateOptions } = fieldManager;
    const value = fieldManager.getData();
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';

    var inputProps: any = copyMuiOptions(props, value, props.label);

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...inputProps} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={props.label ? (variant === 'outlined' ? "text-view-value-outlined" : "text-view-value") : ''}>{value}</div>
                </div> :
                <div {...inputProps} style={{ textAlign: textAlign }}>
                    {value}
                </div>
            }
        </FieldDecorator>}
    </>);
});

export default TextView;
