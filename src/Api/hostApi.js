import request from "./index1"

export const getProfApi = async () => {
    await request.get("/host/profile", {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
}

export const loginApi = (params) => request.post("/signin",params)
export const signupApi = (params) => request.post("/register",params)
export const jwtCheckerApi = (params) => request.post("/api/token/verify",params)
