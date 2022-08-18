const React = require('react');
const Navbar = require('./Navbar');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bike_Routes</title>
        <script defer src="/js/client.js" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript" />
        <script
          src="https://api-maps.yandex.ru/2.1?apikey=3e1eeec6-c0ce-47fc-ae05-7131ff1c2570&lang=ru_RU"
          type="text/javascript"
        />
        <script src="/js/route_panel_control.js" type="text/javascript" />
      </head>
      <body>
        <Navbar />
        {/* <div id="map" style={{ width: `${600}px`, height: `${400}px` }}>1</div> */}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
