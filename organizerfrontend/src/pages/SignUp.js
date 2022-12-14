import { useNavigate } from "react-router-dom"
import { goToMainPage } from "../router/cordinator"
import { SignupContainer } from "./styles/SignUpStyle"

export const SignUp = (props)=>{
    const nav = useNavigate()

    return (
        <SignupContainer>
            <h1>Sign Up</h1>
            <button onClick={()=>goToMainPage(nav)}> SignUp </button>
        </SignupContainer>
        
    )
    }