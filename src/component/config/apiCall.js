import axios from 'axios'

export const APICALL = async(...args)=>{

    let params= {
        url:args[0]
    }

    return await axios(params)

}