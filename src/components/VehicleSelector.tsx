import { useEffect } from "react";
import { ChangeEvent, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import { Planets } from "../api/getPlanets";
import { Vehicles } from "../api/getVehicles";
import { freqCounter } from "../utils/freqCounter";
import { RadioButton } from "./RadioButton";

interface VehicleSelectorProps {
    selectedPlanet: Planets
    selectedPlanets: string[]
    onVehicleChange:Function,
    selectedVehicles: string[],
    idx:number
}

export const VehicleSelector: React.FC<VehicleSelectorProps> = ({selectedPlanet,onVehicleChange,selectedVehicles,idx}) => {
    const qc = useQueryClient()
    const vehicles = qc.getQueryData('vehicles') as Vehicles[]
    const [checked,setChecked] = useState('')

        const availableVehiclesButtons = useMemo(()=>{
            const bookedVehicles:{[key:string] :number} = freqCounter(selectedVehicles)
             
            const onClick = (e : ChangeEvent<HTMLInputElement>) =>{
                setChecked(e.target.value)
                onVehicleChange(e.target.value,selectedPlanet.name,idx)
            }
            return vehicles
            .filter(v => v.max_distance >= selectedPlanet.distance)
            .map(av=><div
                key={Math.random()}
                className="d-flex align-items-center">
                    <RadioButton
                     labelName={av.name}
                      name={selectedPlanet.name}
                       checked={av.name === checked}
                       onChange={onClick}
                       value={av.name}
                       disabled={av.total_no <= (bookedVehicles[av.name] || 0)}
                       />
                    </div>)
        },[selectedVehicles, vehicles, onVehicleChange, selectedPlanet.name, selectedPlanet.distance, idx, checked]) 
        useEffect(()=>{
            setChecked('')
        },[selectedPlanet])
        return (
        <div className="d-flex flex-column">
            
            {availableVehiclesButtons}
            
        </div>);
}   