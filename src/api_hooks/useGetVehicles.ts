import { useQuery } from "react-query";
import getVehicles from "../api/getVehicles";

const useGetVehicles = () => {
    return { ...useQuery(['vehicles'], () => getVehicles(),{
        refetchOnWindowFocus:false
    }) }
}

export default useGetVehicles;