import React, { useState } from "react"
import { Planets } from "../api/getPlanets"
import { Vehicles } from "../api/getVehicles"
import { VehicleSelector } from "./VehicleSelector"

interface PlanetVehicleSelectorProps {
    onSelect: Function,
    planets: Planets[],
    vehicles: Vehicles[],
    selectedPlanets:string[],
    idx:number,
    onVehicleChange:Function,
    selectedVehicles:string[]
}

export const PlanetVehicleSelector: React.FC<PlanetVehicleSelectorProps> = ({onSelect,planets,vehicles,selectedPlanets,idx,onVehicleChange,selectedVehicles}) => {
    const [planet,setPlanet] = useState<string | undefined>(undefined)
    const availablePlanets = planets.filter((planet)=> !selectedPlanets.includes(planet.name))
    const onChange = (e : React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedPlanetName = e.target.value;
        if(selectedPlanetName){
            setPlanet(selectedPlanetName)
            onSelect(selectedPlanetName,idx)
        }
        
    }
        return (
            <div className="d-flex flex-column">
                <select  value={planet} onChange={onChange} >
                    <option value=''>{planet}</option>
                    {availablePlanets.map(ap => <option key={Math.random()} value={ap.name}>{ap.name}</option>)}
                </select>
                {
                planet && 
                <VehicleSelector
                vehicles={vehicles}
                selectedPlanet={planets.filter(p => p.name === planet)[0]}
                selectedPlanets={selectedPlanets}
                onVehicleChange={onVehicleChange}
                selectedVehicles={selectedVehicles}
                idx={idx}
                 />}
            </div>
        );
}