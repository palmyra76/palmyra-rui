
import { PageContext, SectionDefinition } from '../Types';
import SectionRendererChart from './SectionRendererChart';
import SectionRendererEditForm from './SectionRendererEditForm';
import SectionRendererGrid from './SectionRendererGrid';
import SectionRendererViewForm from './SectionRendererViewForm';


interface SectionRendererInput {
    sectionLayout: SectionDefinition,
    context: PageContext
}

const SectionRenderer = (props: SectionRendererInput) => {
    const { sectionLayout } = props;

    switch (sectionLayout.type) {
        case 'form':
            return <SectionRendererEditForm {...props}></SectionRendererEditForm>;
        case 'view':
            return <SectionRendererViewForm {...props}></SectionRendererViewForm>;
        case 'grid':
            return <SectionRendererGrid {...props}></SectionRendererGrid>;
        case 'chart':
            return <SectionRendererChart {...props}></SectionRendererChart>;
        default:
            return <SectionRendererEditForm {...props}></SectionRendererEditForm>;
    }
};

export default SectionRenderer;

