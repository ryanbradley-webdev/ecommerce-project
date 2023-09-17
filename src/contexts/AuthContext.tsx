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
    const [userData, setUserData] = useState<UserData | null>(null)

    const login = async (email: string, password: string) => {
        return await supabase.auth.signInWithPassword({ email, password })
            .then(res => {
                if (!res.error) {
                    const { user } = res.data

                    setUser(user)

                    supabase.from('user-data').select().eq('user_id', user.id).single()
                        .then(res => {
                            if (res.data) {
                                setUserData(res.data)
                            }
                        })
                }

                return res
            })
            .catch(e => ({
                data: null,
                error: e.message
            }))
    }

    const signup = async (email: string, password: string): Promise<AuthResponse | {data: null, error: unknown}> => {
        const newUser = await supabase.auth.signUp({ email, password })
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

        if (newUser.data?.user && !newUser.error) {
            const newUserData = {
                user_id: newUser.data.user.id,
                orders: [],
                shipping_address: null,
                billing_address: null
            }

            supabase.from('user-data').insert(newUserData).select().single()
                .then(res => {
                    if (!res.error) {
                        setUserData(res.data)
                    }
                })
        }

        return newUser
    }

    const logout = () => {
        supabase.auth.signOut()
            .then(() => setUser(null))
    }

    const value = {
        user,
        userData,
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