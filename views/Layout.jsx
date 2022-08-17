const React = require('react'); 


const Layout = ({children}) => {
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Bike_Routes</title>
            <script defer src="/js/client.js"></script>
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        </head>
        <body>
            {children} 
        </body>
        </html>
    )
}

module.exports = Layout;