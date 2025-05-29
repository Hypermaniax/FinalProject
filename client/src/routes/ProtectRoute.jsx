import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export default function ProtectedRoute ({children}) {
    const {user} = useContext(AuthContext)

    if (!user) return <>Need to Login First</>
    return children
}