import { resturantList } from "../constants";
import ResturantCardComponent from "./ResturantCardComponent";
import { useState } from "react";



const BodyComponent = () => {

    //filter data function
    function filterData(searchInput, resturantList){
         return resturantList.filter((res,inde)=> res.info.name.includes(searchInput));
    }

    //search Text it is local variabl
    const[searchInput, setSearchInput] = useState();

    //using to show data in body
    const [resturant, setResturant] = useState(resturantList)

    //search Clicked
    const [searchClicked, setSearchClicked] = useState("false"); 
    console.log("Body Componenent");
    return (
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
                        const data = filterData(searchInput, resturantList);
                       //update the state- resturant
                       setResturant(data);
                 }}>Search</button>
            </div>
            
            {/* //resturant list */}
            <div className="resturant-list">
                {resturant.map((resturant, index) => {
                    return (
                        <ResturantCardComponent {...resturant.info} key={resturant.info.id}/>
                    );
                })}
            </div>
        </>
    );
};
export default BodyComponent;
