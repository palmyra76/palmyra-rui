import { format as formatDate, isValid, parseISO } from 'date-fns';
import { forwardRef, useRef, useContext } from 'react';
import { IDateViewDefinition, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from '../form/FieldDecorator';
import { copyMuiOptions, getFieldLabel } from '../form/MuiUtil';

const DateView = forwardRef(function MuiLabelDisplay(props: IDateViewDefinition, ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef: any = ref ? ref : useRef(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'string', currentRef);
    const { mutateOptions } = fieldManager;
    const value = fieldManager.getData();
    const textAlign: any = props.textAlign || 'left';

    var inputProps: any = copyMuiOptions(props, value, props.label);

    const formatValue = (value: any) => {
        if (!value) {
            return "";
        }
        const date = parseISO(value);
        if (isValid(date)) {
            return formatDate(date, props.displayPattern);
        } else {
            console.error("Invalid date provided:", value);
            return "";
        }
    };
    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...inputProps} >
                    <div className="text-view-label">{props.label}</div>
                    <div className="text-view-value">{formatValue(value)}</div>
                </div> :
                <div {...inputProps} style={{ textAlign: textAlign }} className="text-view-value">
                    {formatValue(value)}
                </div>
            }
        </FieldDecorator>}
    </>);
});

export default DateView;
