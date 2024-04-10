import { SectionRendererInput } from './Types';

/**
 * This renderer will redirect to corresponding SectionRenderer based on the type.
 *
 */
declare const SectionRenderer: (props: SectionRendererInput) => import("react/jsx-runtime").JSX.Element;
export default SectionRenderer;
