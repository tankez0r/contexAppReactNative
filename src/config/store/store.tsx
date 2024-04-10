import { create } from "zustand";

interface IProfileStore {
    name: string;
    email: string;


    ChangeProfile: () => any
}

export const profileStore = create<IProfileStore>()((set) => ({
    name: "John Doe",
    email: "johndoe@email.com",

    ChangeProfile: () => (set({ email: "johndoe@email.com", name: "John Doe" }))
}))