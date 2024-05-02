import { forwardRef, useRef, useContext } from 'react';
import { IFormFieldManager, IGetFieldManager, ILookupViewDefinition } from '../../form/interface';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from '../form/FieldDecorator';
import { copyMuiOptions, getFieldLabel } from '../form/MuiUtil';
import { hasDot } from '../../utils';
import { getValueByKey } from '../../form/FormUtil';

const LookupView = forwardRef(function MuiLabelDisplay(props: ILookupViewDefinition, ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef: any = ref ? ref : useRef(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'serverlookup', currentRef);
    const { mutateOptions } = fieldManager;
    const data = fieldManager.data;
    const lookupOptions = props.lookupOptions || {};
    const labelKey = lookupOptions?.displayAttribute || 'name';
    const textAlign: any = props.textAlign || 'left';

    var inputProps: any = copyMuiOptions(props, data, props.label);

    const labelAccessor = hasDot(labelKey) ?
        (d: any) => (getValueByKey(labelKey, d)) :
        (d: any) => (d?.[labelKey]);

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            {(props.label) ?
                <div {...inputProps} >
                    <div className="text-view-label">{props.label}</div>
                    <div className="text-view-value">{labelAccessor(data) || 'N/A'}</div>
                </div> :
                <div {...inputProps} style={{ textAlign: textAlign }} className="text-view-value">
                    {labelAccessor(data) || 'N/A'}
                </div>
            }
        </FieldDecorator>}
    </>);
});

export default LookupView;
