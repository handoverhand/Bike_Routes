const React = require('react');
const Layout = require('./Layout.jsx');

function RegistrationForm() {
  return (
    <Layout>
      <h2>Для регистрации придумайте Никнейм и пароль</h2>
      <form action="/auth/reg" method="POST">
        <label htmlFor="loginIn">Введите Никнейм</label>
        <input name="loginReg" type="text" id="loginIn" />
        <br />
        <label htmlFor="passwordIn">Введите пароль</label>
        <input name="passwordReg" type="password" id="passwordIn" />
        <br />
        <button type="submit">Регистрация</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationForm;
