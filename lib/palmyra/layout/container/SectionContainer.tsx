import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';

const SectionContainer = (props: SectionContainerInput) => {
    const title = props.title;
    const hideTitle = props.hideTitle || false;
    const containerClass = props.columns ?
        "section-container section-container-" + props.columns + "columns" : "section-container";

    return (
        <div className={containerClass}>
            {(title && !hideTitle) ? (
                <div className="palmyra-form-section-header">{title}</div>) : ''
            }
            {props.children}
        </div>)
}

export default SectionContainer;