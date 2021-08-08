import customFetch from "../utils/customFetch";

export interface Planets {
    name: string,
    distance: number
}
const getPlanets = async () => {
    const { data } = await customFetch.get<Planets[]>('planets')
    return data
}

export default getPlanets;