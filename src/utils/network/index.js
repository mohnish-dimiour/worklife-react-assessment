import { AppInstance, AuthInstance } from "../../App"

export const AuthClient =({url, method, data={}, params={}, headers={}})=>{
    return new Promise((resolve, reject)=>{
        AuthInstance.request({url, method, data, headers, params}).then(res=>{
           return resolve(res)
        }).catch(err=>{
           return reject(err)
        })
    }) 
}

export const AppClient =({url, data={}, params={}, headers={}})=>{
    return AppInstance.request({url, data, headers, params})
}

