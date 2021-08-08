import React, { useState } from "react";
import { Header } from "../components/Header";
import { PlanetVehicleSelectorLists } from "../components/PlanetVehicleSelectorLists";

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
        <div className="container-xl">
            <Header heading={"Finding Falcone!"} />
            <div className="container-xl d-flex justify-content-between" >
                <PlanetVehicleSelectorLists
                onPlanetChange={onPlanetChange}
                selectedPlanets={selectedPlanets}
                selectedVehicles={selectedVehicles}
                onVehicleChange={onVehicleChange} />
            </div>
        </div>
    )
}

export default Home;