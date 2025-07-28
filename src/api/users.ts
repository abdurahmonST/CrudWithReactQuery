import axios from "axios"

const API_URL = "https://fakestoreapi.com/users";

export const getUsers = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

export const getOneUser = async (id: number | string) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
};

export const createUser = async (user: any) => {
    const { data } = await axios.post(API_URL, user);
    return data;
};

export const updateUser = async (id: number | string, user: any) => {
    const { data } = await axios.put(`${API_URL}/${id}`, user);
    return data;
};

export const deleteUser = async (id: number | string) => {
    const { data } = await axios.delete(`${API_URL}/${id}`);
    return data;
}; 