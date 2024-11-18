import axiosInstance from "../Instance";

export const test = async () => {
    try {
        return await axiosInstance.get("/account/test",);
    } catch (error) {
        throw error; // 由调用处处理错误
    }
};

// 登录接口
export const login = async (email, password) => {
    try {
        return await axiosInstance.post("/account/login", {email, password});
    } catch (error) {
        throw error; // 由调用处处理错误
    }
};

// 注册接口
export const register = async (email, password) => {
    try {
        return await axiosInstance.post("/register", {email, password});
    } catch (error) {
        throw error;
    }
};