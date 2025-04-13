import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, MoreHorizontal, User, Calendar } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Home className="icon" onClick={() => navigate("/")} />
            <MoreHorizontal className="icon" onClick={() => navigate("/exercise-generator")} />
            <Calendar className="icon" onClick={() => navigate("/routine")} />
            <User className="icon" onClick={() => navigate("/profile")} />
        </div>
    );
}
