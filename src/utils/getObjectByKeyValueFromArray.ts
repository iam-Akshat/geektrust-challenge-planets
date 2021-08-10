const getObjectByKeyValueFromArray = <T extends {[key:string]:any},V=string>(key : string|number ,value:V,array:T[]):T | null =>{

    for(let x= 0;x < array.length;x++){
        if(array[x][key] === value) return array[x]
    }
    return null
}

export { getObjectByKeyValueFromArray}