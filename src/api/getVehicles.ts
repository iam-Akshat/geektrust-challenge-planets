import customFetch from "../utils/customFetch";

export interface Vehicles {
    name: string,
    total_no: number,
    max_distance: number,
    speed: number
}
const getVehicles = async () => {
    const { data } = await customFetch.get<Vehicles[]>('/vehicles')
    return data
}

export default getVehicles;