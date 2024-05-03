import { format as formatDate, isValid, parse } from 'date-fns';
import { forwardRef, useRef, useContext } from 'react';
import { IDateViewDefinition, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from '../form/FieldDecorator';
import { copyMuiOptions, getFieldLabel } from '../form/MuiUtil';
import './TextView.css';

const DateView = forwardRef(function MuiLabelDisplay(props: IDateViewDefinition, ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef: any = ref ? ref : useRef(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'string', currentRef);
    const { mutateOptions } = fieldManager;
    const value = fieldManager.getData();
    const textAlign: any = props.textAlign || 'left';
    const variant: string = props.variant || 'standard';
    const displayFormat: string = props.displayPattern || "dd-MM-yyyy";

    var inputProps: any = copyMuiOptions(props, value, props.label);
    console.log(value, 'vv');

    const parseDateFromString = (value: any) => {
        const formats = ['yyyy-MM-dd', 'dd-MM-yyyy', 'MM-dd-yyyy', 'dd-yyyy-MM', 'yyyy/MM/dd', 'dd/MM/yyyy',
            "yyyy-MM-dd'T'HH:mm:ss", "dd-MM-yyyy HH:mm", "MM-dd-yyyy h:mm a", "yyyy/MM/dd HH:mm:ss", "dd/MM/yyyy HH:mm"
        ];
        for (const format of formats) {
            const date = parse(value, format, new Date());
            if (isValid(date)) {
                return date;
            }
        }
        return null;
    };

    const formatValue = (value: any) => {
        if (!value) {
            return "";
        }
        const date = parseDateFromString(value);
        if (isValid(date)) {
            return formatDate(date, displayFormat);
        } else {
            console.error("Invalid date provided:", value);
            return "";
        }
    };
    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...inputProps} className='text-view-field-container'>
                    <div className="text-view-label">{props.label}</div>
                    <div className={ (variant == 'standard') ? "text-view-value" : "text-view-value-outlined"}>{formatValue(value)}</div>
                </div> :
                <div {...inputProps} style={{ textAlign: textAlign }}>
                    {formatValue(value)}
                </div>
            }
        </FieldDecorator>}
    </>);
});

export default DateView;
