import axios from 'axios'

export const APICALL = async(...args)=>{
      let newurl = args[0]
    let params= {
        url:newurl
    }

    return await axios(params)

}