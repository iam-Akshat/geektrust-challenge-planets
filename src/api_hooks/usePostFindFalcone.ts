import { useMutation } from "react-query";
import postFindFalcone, { FindFalconeAPIInput } from "../api/postFindFalcone";

const usePostFindFalcone = () => {
    return {
        ...useMutation((data: FindFalconeAPIInput) => {
            return postFindFalcone(data)
        })
    }
}

export default usePostFindFalcone;