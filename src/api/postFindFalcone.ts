import customFetch from "../utils/customFetch";


export interface FindFalconeAPIInput {
    token: string,
    planet_names: string[],
    vehicle_names: string[]
}

export interface FindFalconeAPIOutput {
    status: String,
    planet_name?: String,
    error?: String
}
const postFindFalcone = async (body: FindFalconeAPIInput) => {
    const { data } = await customFetch.post<FindFalconeAPIOutput>('/find', JSON.stringify(body))
    return data
}

export default postFindFalcone;