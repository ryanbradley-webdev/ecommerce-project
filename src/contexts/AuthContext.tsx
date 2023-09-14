import { ReactNode, createContext, useState } from "react"

export const AuthContext = createContext({} as AuthContext)

export default function AuthProvider({
    children
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState(null)

    const logout = () => {
        setUser(null)
    }

    const value = {
        user,
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