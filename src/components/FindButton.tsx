import { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import usePostFindFalcone from "../api_hooks/usePostFindFalcone";
import usePostToken from "../api_hooks/usePostToken";
import { LoadingIndicator } from "./LoadingIndicator";

interface FindButtonProps {
    selectedPlanets: string[]
    selectedVehicles: string[]
}

export const FindButton: React.FC<FindButtonProps> = ({ selectedPlanets, selectedVehicles }) => {
    const [error, setError] = useState('')
    const [gotResult,setGotResult] = useState(false)
    const { mutate: getToken, isLoading: gettingToken, isError: tokenError,data:token } = usePostToken()
    const { mutate: findFalcone, isLoading: isFinding, isError: findError,data:findResult } = usePostFindFalcone()
    const handleClick = () => {
        if (selectedVehicles.length !== 4) {
            setError('Choose all vehicles first')
            return
        };
        setError('')
        getToken()
    }
     
    useEffect(()=>{
        if(token){
            findFalcone({planet_names:selectedPlanets,vehicle_names:selectedVehicles,token:token.token})
        }
        //only want token to change 
        /*eslint-disable-next-line react-hooks/exhaustive-deps */
    },[token])
    useEffect(()=>{
        if(findResult){
            setGotResult(true)
        }
        
    },[findResult])

    if(gotResult && findResult) return <Redirect to={{pathname:'/result',state:findResult}} push/>
    return (<>
        <button
        onClick={handleClick}
        disabled={gettingToken || isFinding}
        className="btn btn-danger d-flex w-25 justify-content-around">
            Find falcone
            {(gettingToken || isFinding) && <LoadingIndicator />}
        </button>
        <p className="text-danger">{error}</p>
        {(tokenError || findError) && <p className="text-danger">API ERROR</p>}
    </>
    );
}