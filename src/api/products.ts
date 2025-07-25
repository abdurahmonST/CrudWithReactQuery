import axios from "axios";
import type { ProductType } from "../services/fakeStore";

export const getProducts = async (): Promise<ProductType[] | undefined> => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getOneProduct = async (id?: number | string): Promise<ProductType[] | undefined> => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}