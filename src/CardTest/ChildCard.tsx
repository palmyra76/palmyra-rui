const ChildCard = (props: any) => {
  const data = props.data;
  return (
    <div style={{ height: '300px', width: "300px", backgroundColor: 'grey' }}>
     {data.name}
    </div>
  )
}

export default ChildCard;
