import { ReactNode, createContext } from "react"

export const AuthContext = createContext({} as AuthContext)

export default function AuthProvider({
    children
}: {
    children: ReactNode
}) {
    const value = {
        user: null
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}