import './Login.css';
import { useState } from "react";

const Login = ({
    handleLogin
}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    const handleSubmitButton = event => {
        event.preventDefault();
        handleLogin({ password, email });
    }

    return (
        <section className="login">
            <div className="login__wrapper">
                <h1 className="login__text">Добро пожаловать!</h1>
                <form className="login__form" onSubmit={handleSubmitButton}>
                    <div className="login__input-wrapper">
                        <input
                            id="input_type_email"
                            type="email"
                            value={email}
                            className="login__input"
                            placeholder=" "
                            onChange={handleChangeEmail}
                            required
                        />
                        <label className="login__label">E-mail</label>
                    </div>
                    <div className="login__input-wrapper">
                        <input
                            id="input_type_password"
                            type="password"
                            value={password}
                            placeholder=" "
                            className="login__input"
                            onChange={handleChangePassword}
                            required
                        />
                        <label className="login__label">Пароль</label>
                    </div>
                    <button className="login__button">Войти</button>
                </form>

            </div>
        </section>
    );
}

export default Login;