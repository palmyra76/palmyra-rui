import { SectionRendererInput } from './Types';


const SectionRendererInvalid = (props: SectionRendererInput) => {
    const val: string = JSON.stringify(props.layout);
    return (
        <>
            <div>Invalid section definition, provide section 'type' in the definition</div>
            <div>{val}</div>
        </>
    );
};

export default SectionRendererInvalid;

