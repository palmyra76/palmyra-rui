
import { default as FormRenderer } from './FormEditRenderer';
import { default as DefaultSectionContainer } from '../container/SectionContainer';

import { SectionRendererInput } from './Types';
import { FormLayout } from './Definitions';


const SectionRendererEditForm = (props: SectionRendererInput) => {
    const { layout, context } = props;
    const { formContext } = context;

    var ChildRenderer = layout.Renderer || FormRenderer;
    var Container = layout.Container || DefaultSectionContainer;

    const getFormLayout = (formLayout: FormLayout) => {
        return (<ChildRenderer formContext={formContext}
            formLayout={formLayout}
        ></ChildRenderer>);
    };

    return (
        <Container  {...layout}>
            {getFormLayout(layout.formLayout)}
        </Container>
    );
};

export default SectionRendererEditForm;

