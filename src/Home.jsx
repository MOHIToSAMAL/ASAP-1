import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const nav = useNavigate();
    return(
        <div style={{textAlign : "center",marginTop : "50px"}} className="home-container">
            <h1>Mohit's ASAP Home Page</h1>

            <button onClick={() => nav('/Add') }>
                Add content
            </button>

            <p>Don't tap anything</p>
            <p>There  is no Animation for any feature yet</p>
   

        </div>
    );
}

export default Home;
