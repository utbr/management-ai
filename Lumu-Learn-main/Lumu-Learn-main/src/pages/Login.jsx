import React, { useState } from 'react';
import '../styles/Login.css';
import { IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new URLSearchParams();
            formData.append('username', nome);
            formData.append('password', senha);
    
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                credentials: 'include',
                body: formData,
            });
    
            if (response.ok) {
                window.location.href = '/';
            } else {
                const error = await response.text();
                setErro(error || 'Erro ao fazer login');
            }
        } catch (err) {
            setErro('Erro ao conectar com o servidor');
        }
    };

    return (
        <div className="wrapper">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    {erro && <p style={{ color: 'red' }}>{erro}</p>}

                    <div className="input-box">
                        <span className="icon">
                            <IonIcon icon={mailOutline} />
                        </span>
                        <input
                            type="text"
                            name="nomeForm"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <label>Nome</label>
                    </div>

                    <div className="input-box">
                        <span className="icon">
                            <IonIcon icon={lockClosedOutline} />
                        </span>
                        <input
                            type="password"
                            name="senhaForm"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <label>Senha</label>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Lembrar-me
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>
                            Não possui uma conta? <a href="/registrar">Cadastre-se</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
