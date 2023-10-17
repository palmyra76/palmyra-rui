
import { default as FormRenderer } from './FormEditRenderer';
import { FormLayout, PageContext, SectionDefinition } from '../Types';
import { default as DefaultSectionContainer } from '../container/SectionContainer';

interface SectionRendererInput {
    sectionLayout: SectionDefinition,
    context: PageContext
}

const SectionRendererEditForm = (props: SectionRendererInput) => {
    const { sectionLayout, context } = props;
    const {formContext} = context;

    var ChildRenderer = sectionLayout.Renderer || FormRenderer;
    var Container = sectionLayout.Container || DefaultSectionContainer;

    const getFormLayout = (formLayout: FormLayout) => {
        return (<ChildRenderer formContext={formContext}             
            formLayout={formLayout} 
        ></ChildRenderer>);
    };

    return (
        <Container  {...sectionLayout}>
            {getFormLayout(sectionLayout.formLayout)}
        </Container>
    );
};

export default SectionRendererEditForm;

