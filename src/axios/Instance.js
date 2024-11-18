import axios from "axios";
import store from "../redux/store";

// 创建 Axios 实例
const axiosInstance = axios.create({
    // baseURL: "http://121.41.31.187:8081",
    baseURL: "http://localhost:8081",
    timeout: 50000, // 请求超时时间
    withCredentials: true, // 如果后端需要 cookies 设置为 true
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config) => {
        // 排除不需要 Token 的接口
        const excludeTokenPatterns = [
            /^\/account\//,   // 匹配 /account/** 及其子路径
            /^\/public\//,    // 匹配 /public/** 及其子路径
            /^\/login/,       // 匹配 /login
            /^\/register/,    // 匹配 /register
        ];

        // 检查请求 URL 是否与排除规则匹配
        const isExcluded = excludeTokenPatterns.some((pattern) =>
            pattern.test(config.url)
        );

        if (!isExcluded) {
            let state = store.getState()
            const token = state.authSlice.token
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }

        return config;
    },
    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response) => {
        // 处理响应数据
        return response.data;
    },
    (error) => {
        // 统一处理错误响应
        if (error.response) {
            console.error("Error:", error.response.status, error.response.data);
            if (error.response.status === 401) {
                window.location.href = "/login"; // Token 过期或无效时跳转到登录
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;