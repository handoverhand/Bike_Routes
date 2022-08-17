const React = require('react');

function AuthorizationForm() {
    return (
        <>
        <h2>Для входа в личный кабинет придумайте Никнейм и пароль</h2>
        <form action="auth/log">
            <label htmlFor="loginInput"></label>
            <input name="login" type="text" id="loginInput" />
            <br />
            <label htmlFor="passwordInput"></label>
            <input name="password" type="password" id="passwordInput" />
        </form>
        </>
    )
}

module.exports = AuthorizationForm;