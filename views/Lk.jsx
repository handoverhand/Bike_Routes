const React = require('react');
const Layout = require('./Layout');

function Lk({ rider }) {
  return (

    <Layout rider={rider}>
      <form type="submit" className="lkForm">
        <div id="map" style={{ width: `${600}px`, height: `${400}px` }} />
        <div className="input-group mb-3">

          <input name="formInput" type="text" className="form-control" placeholder="Введите название маршрута" aria-label="Recipient's username" aria-describedby="button-addon2" />

          <div className="input-group mb-3">
            <input name="imgInput" type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02" />
          </div>

          {/* <input name="imgInput" type="text" className="form-control" placeholder="Введите URL картинки" aria-label="Recipient's username" aria-describedby="button-addon2" /> */}

          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Добавить свой маршрут</button>
        </div>
        <div className="addedCoord" />
      </form>

    </Layout>
  );
}
module.exports = Lk;
