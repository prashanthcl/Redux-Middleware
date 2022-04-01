import axios from "axios"

export const AxioCall = async(...args)=>{
    let newurl = args[0]
    const params = {
        url:newurl
    }
    
    if(args[1]==='POST' || args[1]==="DELETE" || args[1]==="PUT"){
        params.method = args[1];
        params.data = args[2];
    }
    return await axios(params)
}
