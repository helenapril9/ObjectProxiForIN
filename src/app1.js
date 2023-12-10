export default function orderByProps(objX, arr){
    let result = [];
    for (let j in arr) {
        if (objX.hasOwnProperty(arr[j])) {    
            result.push({key: arr[j], value: objX[arr[j]]})          
        } else throw new Error ("Нет такого свойства у объекта");
    }
    let data = objX;
    for (let prop in data) {
        if(arr.includes(prop)){
            delete data[prop];        
        }
    }
    let keys =  Object.keys(data);
    keys.sort();
    for (let i in keys) {    
        result.push({key: keys[i], value: objX[keys[i]]});  
    }    
    return result;
}


