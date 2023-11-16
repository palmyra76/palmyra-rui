
import { default as FormRenderer } from './FormEditRenderer';
import { default as DefaultSectionContainer } from '../container/SectionContainer';

import { SectionRendererInput } from './Types';
import { FormLayout } from './Definitions';
import FormFieldContainer from '../container/FieldGroupContainer';


const SectionRendererEditForm = (props: SectionRendererInput) => {
    const { layout, context } = props;

    var ChildRenderer = layout.Renderer || FormRenderer;
    var Container = layout.Container || DefaultSectionContainer;

    const getFormLayout = (formLayout: FormLayout) => {
        return (<ChildRenderer context={context}
            formLayout={formLayout}
        ></ChildRenderer>);
    };

    return (
        <Container hideTitle={layout.hideTitle}
            title={layout.title} name={layout.name}
        >
            <FormFieldContainer columns={layout.columns} >
                {getFormLayout(layout.formLayout)}
            </FormFieldContainer>
        </Container>
    );
};

export default SectionRendererEditForm;

