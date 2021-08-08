import { useMutation } from "react-query";
import postToken from "../api/postToken";

const usePostToken = () => {
    return { ...useMutation(['token', Date.now()], () => postToken()) }
}

export default usePostToken;