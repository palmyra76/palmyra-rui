import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';

const SectionContainer = (props: SectionContainerInput) => {
    const title = props.title;
    const hideTitle = props.hideTitle || false;
    return (<>
        {(title && !hideTitle) ? (
            <div className="palmyra-form-section-header">{title}</div>) : ''
        }
        {props.children}
    </>)
}

export default SectionContainer;