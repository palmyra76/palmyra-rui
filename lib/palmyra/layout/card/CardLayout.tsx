import { ReactNode } from 'react';
import '../card/CardLayout.css';
import EmptyChildCard from './EmptyChildCard';

interface CardLayoutInput {
    children?: ReactNode,
    dataList: any[],
    Child: React.FC,
    childProps: any,
    childKeyProvider: (data: any, index: number) => string | number;
}

const CardLayout = (props: CardLayoutInput) => {
    const { children, dataList, Child, childProps } = props;
    const childKeyProvider = props.childKeyProvider || ((data: any, index: number) => index);

    return (
        <div>{dataList.length == 0 ? (
            <EmptyChildCard />
        ) : (
            <div className="card-container" >
                {children}
                <div className="card-wrapper" >
                    {dataList.map((data: any, index: number) => (
                        <Child key={childKeyProvider(data, index)}
                            {...childProps} data={data}></Child>
                    ))}
                </div>
            </div>)}

        </div>
    )
}
export default CardLayout;
export type { CardLayoutInput }