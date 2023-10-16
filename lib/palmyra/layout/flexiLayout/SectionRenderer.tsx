
import { default as FormRenderer } from './FormEditRenderer';
import { FormLayout, SectionDefinition } from '../Types';
import { FormRuntime } from '../../form/Types';
import { default as DefaultSectionContainer } from '../container/SectionContainer';

interface SectionRendererInput {
    sectionLayout: SectionDefinition,
    formContext: FormRuntime
}

const SectionRenderer = (props: SectionRendererInput) => {
    const { sectionLayout, formContext } = props;

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

export default SectionRenderer;

