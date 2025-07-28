import React, { useState } from "react";
import { useAllUsers, useCreateUser, useDeleteUser, useUpdateUser } from "../hooks/useUsers";
import { useNavigate } from "react-router";

const Users = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, error } = useAllUsers();
    const createUser = useCreateUser();
    const updateUser = useUpdateUser();
    const deleteUser = useDeleteUser();

    const [form, setForm] = useState({ username: "", email: "" });
    const [editId, setEditId] = useState<number | string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editId) {
            updateUser.mutate({ id: editId, user: form });
            setEditId(null);
        } else {
            createUser.mutate(form);
        }
        setForm({ username: "", email: "" });
    };

    const handleEdit = (user: any) => {
        setEditId(user.id);
        setForm({ username: user.username, email: user.email });
    };

    if (isLoading) return <p>Yuklanmoqda...</p>;
    if (error) return <p>Xatolik yuz berdi!</p>;

    return (
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
                Ortga qaytish
            </button>
            <h1>Users CRUD sahifasi</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
                <input
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    style={{ marginRight: 8 }}
                />
                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{ marginRight: 8 }}
                />
                <button type="submit">{editId ? "Saqlash" : "Qo'shish"}</button>
                {editId && (
                    <button type="button" onClick={() => { setEditId(null); setForm({ username: "", email: "" }); }} style={{ marginLeft: 8 }}>
                        Bekor qilish
                    </button>
                )}
            </form>
            <table border={1} cellPadding={8} cellSpacing={0} width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Amallar</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEdit(user)}>Tahrirlash</button>
                                <button onClick={() => deleteUser.mutate(user.id)} style={{ marginLeft: 8 }}>O'chirish</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users; 