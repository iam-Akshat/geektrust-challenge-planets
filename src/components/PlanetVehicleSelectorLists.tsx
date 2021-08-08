import { useMemo } from "react"
import useGetPlanets from "../api_hooks/useGetPlanets"
import useGetVehicles from "../api_hooks/useGetVehicles"
import { TextColor } from "../utils/colorEnum"
import { LoadingIndicator } from "./LoadingIndicator"
import { PlanetVehicleSelector } from "./PlanetVehicleSelector"

interface PlanetVehicleSelectorListsProps {
    numOfPlanets?: number,
    onPlanetChange: Function,
    selectedPlanets: string[],
    selectedVehicles: string[],
    onVehicleChange: Function
}

export const PlanetVehicleSelectorLists: React.FC<PlanetVehicleSelectorListsProps> = ({ numOfPlanets = 4, onPlanetChange, selectedPlanets,onVehicleChange,selectedVehicles }) => {
    const { data: planets, error: planetsError, isLoading: isPlanetsLoading } = useGetPlanets()
    const { data: vehicles, error: vehiclesError, isLoading: isVehiclesLoading } = useGetVehicles()

    const selectorLists = useMemo(() => {
        const list = []
        for (let x = 0; x < numOfPlanets; x++) {
            if (planets && vehicles) list.push(
                <PlanetVehicleSelector
                    onSelect={onPlanetChange}
                    onVehicleChange={onVehicleChange}
                    selectedPlanets={selectedPlanets}
                    selectedVehicles={selectedVehicles}
                    idx={x} />)
        }
        return list
    }, [numOfPlanets, planets, vehicles, onPlanetChange, onVehicleChange, selectedPlanets, selectedVehicles])

    if (isPlanetsLoading || isVehiclesLoading) return <LoadingIndicator color={TextColor.GREEN} />
    if (planets && vehicles) return (
        <>
            {selectorLists}
        </>
    )
    if (planetsError || vehiclesError) return (<div className="text-danger"> ERROR,REFRESH</div>)
    return (<LoadingIndicator />);
}