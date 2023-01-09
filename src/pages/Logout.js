import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



function Logout() {

    const {user, logout } = UserAuth();
    const handleLogout = () => {
        try {
            logout()
            Navigate('/')
        }
        catch (e) {
            console.log()
        }
    }
    return ( <div></div>
    );
  }
export default Logout