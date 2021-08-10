type FreqCounterArray = string | number
export const freqCounter = (arr : Array<string|number>):{[key in FreqCounterArray]:number} => {
        const map:{[key in FreqCounterArray ]:number} = {} 

        arr.forEach((val)=>{
            if(map[val]){
                map[val] += 1
            }else{
                map[val] = 1
            }
        })
        return map;
}