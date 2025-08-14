import { useState } from "react";

//we can use predefined hooks in custom hooks as well
const useToggle = (defaultVal) => {
    const [value,setValue] = useState(defaultVal);
    function toggleValue(val){
        console.log(val);
        if(typeof val != 'boolean'){
            console.log("if");
            setValue(!value);
        }else{
            console.log("else");
            setValue(val);
        }
    }
    return [value,toggleValue];
}

export default useToggle;
