import CodeHighlighter from "../syntextHighlighter/CodeHighlighter";

interface IBoxInput {
    Components?: React.FC[],
    setup: string
}
const InfoBox = (props: IBoxInput) => {
    const { Components, setup } = props;
    return (
        <>
            <div className="info-box-container">
                {Components &&
                    <div className="info-box-component-container">
                        {Components.map((Component, index) => (
                            <Component key={index} />
                        ))}
                    </div>}
                <div className="info-box-detail-container">
                    <CodeHighlighter code={setup} />
                </div>
            </div>
        </>

    )
}

export default InfoBox;
