import { resturantList } from "../constants";
import ResturantCardComponent from "./ResturantCardComponent";
import { useState } from "react";

import { useEffect, useState } from "react";
import Shimmer from "./ShimerComponent";


const BodyComponent = () => {

    //filter data function
    function filterData(searchInput, allresturants){
         return allresturants.filter((res,inde)=> res?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
    }

    //search Text it is local variabl
    const[searchInput, setSearchInput] = useState();

    //all resturant original
    const[allresturants, setAllResturants] = useState([])

    //using to show data in body
    const [resturant, setResturant] = useState(resturantList)

    //search Clicked
    
    const [filteredresturant, setFilteredResturant] = useState([]);

    //search Clicked
    

    //api call
    useEffect(()=>{
        console.log("USE EFFECT - Body Component");
        getResturants();
    },[])

    //
    async function getResturants(){
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4871462&lng=73.8200227&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();
        //  console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         const myrestu = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
         console.log(myrestu);
         setFilteredResturant(myrestu);
         setAllResturants(myrestu);
    }

    console.log("Render - Body Componenent");

    //conditional rendering
    //if resturant is empty => shimmer Ui
    //if resturant has data => actual data UI

    //not render component (Early return)
    // if(allresturants.length === 0) return null;

    return (allresturants?.length === 0) ? <Shimmer/> : 
    (
        <> 
            {/* search bar */}
            <div className="search-container">
                 <input type="text" className="search-input" placeholder="Search Here !!"
                 value={searchInput}
                 onChange={(e)=> setSearchInput(e.target.value)}
                 /> 
                 <button className="search-btn" onClick={()=>
                 {
                       //need to filter the data
                        const data = filterData(searchInput, allresturants);
                       //update the state- filtered resturant
                       setFilteredResturant(data)
                 }}>Search</button>
            </div>
            
            {/* //resturant list */}
            <div className="resturant-list">
                {filteredresturant?.length === 0 ? <h2>No Match Found With : {searchInput}</h2> :
                    filteredresturant?.map((resturant, index) => {
                    return (
                        <ResturantCardComponent {...resturant.info} key={resturant.info.id}/>
                    );
                })}
            </div>
        </>
    );
};
export default BodyComponent;
