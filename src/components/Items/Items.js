import React, { useState } from "react";
import ItemsCard from "./ItemsCard";
import ItemsData from "./ItemsData";
import Navbar from "../Navbar/Navbar";

export default function Items() {
    const [active, setActive] = useState("FirstCard");

    return (
        <div className="App">
            <Navbar/>
            <nav>
                <button onClick={() => setActive("FirstCard")}>One</button>
                <button onClick={() => setActive("SecondCard")}>Two</button>
                <button onClick={() => setActive("ThirdCard")}>Three</button>
            </nav>
            <div>
                {active === "FirstCard" && <ItemsCard data={ItemsData} cardIndex={0} />}
                {active === "SecondCard" && <ItemsCard data={ItemsData} cardIndex={1} />}
                {active === "ThirdCard" && <ItemsCard data={ItemsData} cardIndex={2} />}
            </div>
        </div>
    );
}
