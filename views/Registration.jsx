const React = require('react');
const Layout = require('./Layout.jsx');

function RegistrationForm({regmessage}) {
  return (
    <Layout>
      <div className = "regDiv shadow-lg p-3 mb-5 bg-body rounded">
      <div className = "whiteDiv"></div>
      <h2>Для регистрации придумайте Никнейм и пароль</h2>
      <div className = "whiteDiv"></div>
      <form action="/auth/reg" method="POST" className="form1">
        <label htmlFor="loginIn" className="form-label"><h3>Введите Никнейм</h3></label>
        <input name="loginReg" type="text" id="loginIn" className="form-control" />
        <br />
        <label htmlFor="passwordIn" className="col-form-label"><h3>Введите пароль</h3></label>
        <input name="passwordReg" type="password" id="passwordIn" className="form-control" />
        <br />
        <button type="submit" className="btn btn-primary">Регистрация</button>
        <div>{regmessage}</div>
      </form>
      </div>
    </Layout>
  );
}

module.exports = RegistrationForm;
