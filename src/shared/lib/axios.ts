import axios, {AxiosError} from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // URL will be changed by backend url
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("@access-token") || ""
    if(config.headers && token) config.headers["Authorization"] = `Bearer ${token}`
    return config
})

axiosInstance.interceptors.response.use(
    (response) => response,
    async(error: AxiosError) => {
        if(error.response?.status === 401) {
            localStorage.removeItem("@access-token")
            // window.location.href = '/'  Редирект
        }
        return Promise.reject(error)
    }
)
export default axiosInstance
