import { useQuery } from "@tanstack/react-query"
import { getOneProduct, getProducts } from "../api/products"

export const useAllProducts = () => {
    return useQuery({
        queryFn: getProducts,
        queryKey: ["products"]
    })
}

export const useOneProduct = (id?: number | string) => {
    return useQuery({
        queryFn: () => getOneProduct(id),
        queryKey: ['one-product', id],
        enabled: !!id,
    })
}