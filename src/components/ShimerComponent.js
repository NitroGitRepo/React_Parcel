const Shimmer = ()=>{
    return(
        <div className="shimmer-card">
          {Array(10).fill(" ").map((e,index)=> <div key={index} className="shimmer-cards"> </div>)}  
        </div>
    )
}
export default Shimmer;