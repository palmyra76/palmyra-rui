import '../card/CardLayout.css';
import EmptyChildCard from './EmptyChildCard';

const CardLayout = (props :any) => {
    const { children, dataList, Child, childProps } = props;

    return (
        <div>{dataList.length == 0 ? (
            <EmptyChildCard/>
        ) : (
            <div className="card-container" >
                {children}
                <div className="card-wrapper" >
                    {dataList.map((data, index) => (
                        <Child  {...childProps} data={data}></Child>
                    ))}
                </div>
            </div>)}

        </div>
    )
}
export default CardLayout;
