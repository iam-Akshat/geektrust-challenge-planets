import React, { useState } from "react"
import { useQueryClient } from "react-query"
import { Planets } from "../api/getPlanets"
import { VehicleSelector } from "./VehicleSelector"

interface PlanetVehicleSelectorProps {
    onSelect: Function,
    selectedPlanets:string[],
    idx:number,
    onVehicleChange:Function,
    selectedVehicles:string[]
}

export const PlanetVehicleSelector: React.FC<PlanetVehicleSelectorProps> = ({onSelect,selectedPlanets,idx,onVehicleChange,selectedVehicles}) => {
    const [planet,setPlanet] = useState<string | undefined>(undefined)
    const qc = useQueryClient()
    const planets = qc.getQueryData('planets') as Planets[]   
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
                selectedPlanet={planets.filter(p => p.name === planet)[0]}
                selectedPlanets={selectedPlanets}
                onVehicleChange={onVehicleChange}
                selectedVehicles={selectedVehicles}
                idx={idx}
                 />}
            </div>
        );
}