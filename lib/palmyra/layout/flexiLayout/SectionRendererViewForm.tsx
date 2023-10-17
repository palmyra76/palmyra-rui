
import { default as FormRenderer } from './FormViewRenderer';
import { FormLayout } from '../Types';
import { default as DefaultSectionContainer } from '../container/SectionContainer';
import { SectionRendererInput } from './Types';

const SectionRendererViewForm = (props: SectionRendererInput) => {
    const { sectionLayout, context } = props;
    const { formContext } = context;

    var ChildRenderer = sectionLayout.Renderer || FormRenderer;
    var Container = sectionLayout.Container || DefaultSectionContainer;

    const getFormLayout = (formLayout: FormLayout) => {
        return (<ChildRenderer data={formContext.data}
            formLayout={formLayout}
        ></ChildRenderer>);
    };

    return (
        <Container  {...sectionLayout}>
            {getFormLayout(sectionLayout.formLayout)}
        </Container>
    );
};

export default SectionRendererViewForm;

