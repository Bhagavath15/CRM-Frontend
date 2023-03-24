// import logo from "../images/crm-logo.png"
import { useNavigate } from "react-router-dom"

export default function Nav() {
    const navigate = useNavigate()
    return (
        <nav>
            <div className="logo-container">
                {/* <img src={logo} alt="logo" /> */}
            </div>
            <div className="controls-container">
                <div className="icons" onClick={() => navigate("/ticket")}>+</div>
                <div className="icons" onClick={() => navigate("/")}>-</div>
            </div>
        </nav>
    )
}