import { useNavigate } from "react-router-dom"
import { goToMainPage } from "../router/cordinator"

export const SignUp = (props)=>{
    const nav = useNavigate()

    return (
        <div>
            <h1>Sign Up</h1>
            <button onClick={()=>goToMainPage(nav)}> SignUp </button>
        </div>
    )
    }