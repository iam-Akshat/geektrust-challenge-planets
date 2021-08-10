import React, { useState } from "react";
import { FindButton } from "../components/FindButton";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PlanetVehicleSelectorLists } from "../components/PlanetVehicleSelectorLists";
import { TimeSum } from "../components/TimeSum";

const Home: React.FC = () => {

    const [selectedPlanets, setSelectedPlanets] = useState<string[]>([])
    const [selectedVehicles, setSelectedVehicles] = useState<string[]>([])
    
    const onPlanetChange = (value:string,idx:number) =>{
        setSelectedPlanets((oldPlanets)=>{
            // remove planet selection for the old planet
            if(selectedVehicles[idx]){    
                setSelectedVehicles((oldVehicles)=>{
                    oldVehicles.splice(idx,1)
                    return [...oldVehicles]
                })
            }        
            oldPlanets[idx] = value
            return [...oldPlanets]
        })
    }

    const onVehicleChange = (vName:string,pName:string,idx:number) =>{
        setSelectedVehicles((oldVehicles)=>{
            oldVehicles[idx] = vName
            return [...oldVehicles]
        })
    }

    return(
        <>
        <div className="container-xl h-100 d-flex flex-column">
            <Header heading={"Finding Falcone!"} />
            <div className="container-xl d-flex justify-content-between" >
                <PlanetVehicleSelectorLists
                onPlanetChange={onPlanetChange}
                selectedPlanets={selectedPlanets}
                selectedVehicles={selectedVehicles}
                onVehicleChange={onVehicleChange} />
                <h3>
                <TimeSum selectedPlanets={selectedPlanets} selectedVehicles={selectedVehicles} />
                </h3>
            </div>
            <div className="w-100">
                <FindButton selectedPlanets={selectedPlanets} selectedVehicles={selectedVehicles}/>
            </div>
            <Footer />
        </div>

        </>
    )
}

export default Home;