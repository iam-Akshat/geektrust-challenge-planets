import { useQuery } from "react-query";
import getPlanets from "../api/getPlanets";

const useGetPlanets = () => {
    return { ...useQuery(['planets'], () => getPlanets(),{
        refetchOnWindowFocus:false,
    }) }
}

export default useGetPlanets;