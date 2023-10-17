
import { default as FormRenderer } from './FormViewRenderer';
import { default as DefaultSectionContainer } from '../container/SectionContainer';

import { SectionRendererInput } from './Types';
import { FormLayout } from './Definitions';


const SectionRendererInvalid = (props: SectionRendererInput) => {
    const { layout, context } = props;
    const { formContext } = context;

    var ChildRenderer = layout.Renderer || FormRenderer;
    var Container = layout.Container || DefaultSectionContainer;

    const getFormLayout = (formLayout: FormLayout) => {
        return (<ChildRenderer data={formContext.data}
            formLayout={formLayout}
        ></ChildRenderer>);
    };

    return (
        <Container  {...layout}>
            {getFormLayout(layout.formLayout)}
        </Container>
    );
};

export default SectionRendererInvalid;

