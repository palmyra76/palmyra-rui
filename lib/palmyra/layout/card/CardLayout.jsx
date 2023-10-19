import React from 'react';

const CardLayout = (props) => {
    const { children, dataList, Child, EmptyChild, childProps } = props;
    
    return (
        <div>{dataList.length == 0 ? (
            <div>No Data Avilable</div>
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
