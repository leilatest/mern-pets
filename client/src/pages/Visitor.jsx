import React from "react";
import NavBar from "../components/NavBar";
import Visitorone from "../components/Visitorone";

function Visitor() {
  return (
    <div>
      <div>
        <NavBar />
        <div>
          <img
            className="object-cover w-screen border border-black h-[28rem] "
            src="https://pioneerec.com/wp-content/uploads/2023/03/AdobeStock_195237382.jpeg"
          />
        </div>
        <div className="h-screen ">
          <Visitorone /> 
        </div>
      </div>
    </div>
  );
}

export default Visitor;
