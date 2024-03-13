import react from "react";
import Card from "./Card";
let API_key="c3058dcaab0576815b6de6b5d582dbae";
let basic_url="https://api.themoviedb.org/3";
const Main=()=>{
    return(
        <>
        <div className="header">
          <nav>
              <ul>
                  <li><a heref="#">Popular</a></li>
                  <li><a heref="#">Family</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a heref="#">Drama</a></li>
                  <li><a heref="#">Comedie</a></li>
              </ul>
          </nav>
          <from>
              <div className="search-btn">
                  <input type="text" placeholder="Enter Movie Name" className="inputText">

                  </input>
                  <button><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
          </from>
        </div>
        <div className="container">
           <Card/>
           
            
        </div>
        </>
    )
}
export default Main;