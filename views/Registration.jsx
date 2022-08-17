const React = require('react');

function RegistrationForm() {
    return (
        <>
        <h2>Для регистрации придумайте Никнейм и пароль</h2>
        <form action="auth/reg">
            <label htmlFor="loginInput"></label>
            <input name="login" type="text" id="loginInput" />
            <br />
            <label htmlFor="passwordInput"></label>
            <input name="password" type="password" id="passwordInput" />
        </form>
        </>
    )
}

module.exports = RegistrationForm;