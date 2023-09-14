import { ReactNode, createContext, useState } from "react"
import { supabase } from "../supabase/supabaseInit"
import { User } from "@supabase/supabase-js"

export const AuthContext = createContext({} as AuthContext)

export default function AuthProvider({
    children
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)

    const login = (email: string, password: string) => {
        supabase.auth.signInWithPassword({ email, password })
            .then(res => setUser(res.data.user))
            .catch(e => console.log(e))
    }

    const signup = (email: string, password: string) => {
        supabase.auth.signUp({ email, password })
            .then(res => {
                const { user } = res.data

                setUser(user)
            })
    }

    const logout = () => {
        supabase.auth.signOut()
            .then(() => setUser(null))
    }

    const value = {
        user,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}