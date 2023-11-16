import { SectionContainerInput } from "../flexiLayout/Types";
import './SectionLayout.css';

const SectionContainer = (props: SectionContainerInput) => {
    const title = props.title;
    const hideTitle = props.hideTitle || false;

    return (<div className='section-container'>
        {(title && !hideTitle) ? (
            <div className="palmyra-form-section-header">{title}</div>) : ''
        }
        <div className='section-container-child'>
            {props.children}
        </div>
    </div>)
}

export default SectionContainer;