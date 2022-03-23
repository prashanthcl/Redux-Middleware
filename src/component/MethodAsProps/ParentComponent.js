import ChildComponent from "./ChildComponent";

function ParentComponent(props){
    const greetParent = (ele)=>{
        alert(`Greet from Parent to ${ele} Component`)
    }
    return(
        <>
        <ChildComponent greetMessage={greetParent}/>
        </>
    )
}
export default ParentComponent;