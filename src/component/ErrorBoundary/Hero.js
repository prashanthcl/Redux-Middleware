import ErrorBoundary from "./ErrorBoundary";
function Hero(props){
    if(props.heroName==='joker'){
        throw new Error('Not a Hero')
    }
    return(
        <>
        <ErrorBoundary>
       <h2>{props.heroName}</h2>
       </ErrorBoundary> 
       <h2>{props.movieName}</h2>
    
        </>
    )
}
export default Hero;