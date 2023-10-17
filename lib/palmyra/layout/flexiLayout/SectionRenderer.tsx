
import SectionRendererChart from './SectionRendererChart';
import SectionRendererEditForm from './SectionRendererEditForm';
import SectionRendererGrid from './SectionRendererGrid';
import SectionRendererInvalid from './SectionRendererInvalid';
import SectionRendererViewForm from './SectionRendererViewForm';

import { SectionRendererInput } from './Types';

/**
 * This renderer will redirect to corresponding SectionRenderer based on the type. 
 * 
 */

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
            return <SectionRendererInvalid {...props}></SectionRendererInvalid>;
    }
};

export default SectionRenderer;

