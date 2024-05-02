import { format as formatDate, parseISO } from 'date-fns';
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
        if (value) {
            const date: any = parseISO(value);
            return formatDate(date, props.displayPattern);
        }
        return value;
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
