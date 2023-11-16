
import { default as FormRenderer } from './FormEditRenderer';
import { default as DefaultSectionContainer } from '../container/SectionContainer';

import { SectionRendererInput } from './Types';
import { FormLayout } from './Definitions';


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
        <Container columns={layout.columns} hideTitle={layout.hideTitle}
            title={layout.title} name={layout.name}
        >
            {getFormLayout(layout.formLayout)}
        </Container>
    );
};

export default SectionRendererEditForm;

