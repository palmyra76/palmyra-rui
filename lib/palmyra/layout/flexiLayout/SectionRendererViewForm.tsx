
import { default as FormRenderer } from './FormViewRenderer';
import { default as DefaultSectionContainer } from '../container/SectionContainer';
import { SectionRendererInput } from './Types';
import { FormLayout } from './Definitions';

const SectionRendererViewForm = (props: SectionRendererInput) => {
    const { layout, context } = props;
    
    var ChildRenderer = layout.Renderer || FormRenderer;
    var Container = layout.Container || DefaultSectionContainer;

    const getFormLayout = (formLayout: FormLayout) => {
        return (<ChildRenderer context={context}
            formLayout={formLayout}
        ></ChildRenderer>);
    };

    return (
        <Container  {...layout}>
            {getFormLayout(layout.formLayout)}
        </Container>
    );
};

export default SectionRendererViewForm;

