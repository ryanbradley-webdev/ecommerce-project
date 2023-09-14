import { ReactNode, createContext, useState } from "react"
import { supabase } from "../supabase/supabaseInit"
import { AuthResponse, User } from "@supabase/supabase-js"

export const AuthContext = createContext({} as AuthContext)

export default function AuthProvider({
    children
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)

    const login = async (email: string, password: string) => {
        return await supabase.auth.signInWithPassword({ email, password })
            .then(res => {
                if (!res.error) {
                    const { user } = res.data

                    setUser(user)
                }

                return res
            })
            .catch(e => ({
                data: null,
                error: e.message
            }))
    }

    const signup = async (email: string, password: string): Promise<AuthResponse | {data: null, error: unknown}> => {
        return await supabase.auth.signUp({ email, password })
            .then(res => {
                if (!res.error) {
                    const { user } = res.data

                    setUser(user)
                }

                return res
            })
            .catch(e => ({
                data: null,
                error: e.message
            }))
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