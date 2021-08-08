import customFetch from "../utils/customFetch";

export interface PostTokenAPIOutput {
    token:string
}
const postToken = async() =>{
    const result = await customFetch.post<PostTokenAPIOutput>('/token')
    return result.data;
}

export default postToken;