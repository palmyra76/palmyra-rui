
const UserCard = (props: any) => {
    console.log(props);
    const data = props.data;

    return <div style={{ width: '1800px' }}> {data.loginName} - {data.email}</div>
}

export { UserCard }