const ResturantCardComponent = ({name, cloudinaryImageId, cuisines, avgRating})=>{
    return(
        <div className="card shadow-2xl">
           <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
           <h3>{name}</h3>
           <h5>{cuisines.join(", ")}</h5>
           <h6>{avgRating} ⭐</h6>
        </div>
    )
}

export default ResturantCardComponent;
