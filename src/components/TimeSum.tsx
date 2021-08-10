import { useState } from "react";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { Planets } from "../api/getPlanets";
import { Vehicles } from "../api/getVehicles";
import { getObjectByKeyValueFromArray } from "../utils/getObjectByKeyValueFromArray";

interface TimeSumProps {
    selectedVehicles:string[],
    selectedPlanets:string[],
    unit?:string
}

export const TimeSum: React.FC<TimeSumProps> = ({selectedPlanets,selectedVehicles,unit="s"}) => {
    const [time,setTime] = useState(0)
    const qc = useQueryClient()
    const vehicles = qc.getQueryData('vehicles') as Vehicles[]
    const planets = qc.getQueryData('planets') as Planets[]

    useEffect(()=>{
        let newTime = 0
        selectedVehicles.forEach((vehicle,idx) =>{            
            const curVehicle = getObjectByKeyValueFromArray<Vehicles>('name',vehicle,vehicles)
            const curPlanet = getObjectByKeyValueFromArray<Planets>('name',selectedPlanets[idx],planets)
            if(curPlanet && curVehicle){
                newTime += (curPlanet.distance / curVehicle.speed) 
            }
        })
        setTime(newTime)

        // using simple solution so not to complex the situation by 
        window.localStorage.setItem('time',`${newTime}`)
    },[planets, selectedPlanets, selectedVehicles, vehicles])

    if(!vehicles || !planets) return (<>Time taken:0s</>)
        return (
        <>
            {`Time taken: ${time}${unit}`}
        </>);
}       