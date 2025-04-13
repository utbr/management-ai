import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer"; // Importando o Footer
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Footer /> {/* Adicionando o Footer */}
        </div>
    );
}

export default App;
