import request from "./index2"

export const startSessionApi = (params) => request.post("/start_session",params)
export const endSessionApi = (params) => request.delete("/end_session/" + params)
export const chatApi = (params) => request.post("",params)  //有待验证
