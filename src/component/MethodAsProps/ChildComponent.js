function ChildComponent(props){
    return(
        <>
      <button onClick={()=>props.greetMessage('child')}></button>
        </>
    )
}
export default ChildComponent;