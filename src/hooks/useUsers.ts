import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, getOneUser, createUser, updateUser, deleteUser } from "../api/users";

export const useAllUsers = () => {
    return useQuery({
        queryFn: getUsers,
        queryKey: ["users"]
    });
};

export const useOneUser = (id?: number | string) => {
    return useQuery({
        queryFn: () => getOneUser(id!),
        queryKey: ["user", id],
        enabled: !!id,
    });
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, user }: { id: number | string, user: any }) => updateUser(id, user),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number | string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
}; 