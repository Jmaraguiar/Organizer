import { useNavigate } from "react-router-dom"
import { goToSignUpPage } from "../router/cordinator"

export const MainPage = (props)=>{
    const nav = useNavigate()

return (
    <div>
        <h1>Main Page</h1>
        <button onClick={()=>goToSignUpPage(nav)}> SignUp </button>
    </div>
    

)
}
