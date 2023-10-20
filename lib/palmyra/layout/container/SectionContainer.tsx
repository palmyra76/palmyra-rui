import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';

const SectionContainer = (props: SectionContainerInput) => {

    const title = props.title;

    return (
        <div>
            {(title) ? (
                <div className="palmyra-form-section-header">{title}</div>) : ''
            }
            {props.children}
        </div>
    )
}

export default SectionContainer;