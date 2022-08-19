const React = require('react');
const Layout = require('./Layout');

function Lk({ rider }) {
  return (

    <Layout rider={rider}>
      <form type="submit" className="lkForm">

        <div id="map" className="lkmap" />
        <div className="regDiv shadow-lg p-3 mb-5 bg-body rounded">

          <input name="formInput" type="text" className="form-control" placeholder="Введите название маршрута" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <br/>
          <input name="locInput" type="text" className="form-control" placeholder="Введите название локации" aria-label="Recipient's username" aria-describedby="button-addon2" />
<br />

          <div className="input-group mb-3">
            <input name="imgInput" type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02" />
          </div>

          {/* <input name="imgInput" type="text" className="form-control" placeholder="Введите URL картинки" aria-label="Recipient's username" aria-describedby="button-addon2" /> */}

          <button className="btn btn-primary" type="submit" id="button-addon2">Добавить свой маршрут</button>
        </div>
        <div className="addedCoord" />
      </form>

    </Layout>
  );
}
module.exports = Lk;
