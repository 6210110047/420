const {resolve} = require('path')
module.exports = {
    plugins : [
        {
            resolve: '@directus/gatsby-source-directus',
            options: {
              url: `http://localhost:8055`, // Fill with your Directus instance address
              auth: {
                //token: 'my_secret_token', // You can use a static token from an user
      
                // Or you can use the credentials of an user
                email: 'admin@test.com',
                password: '1234',
              },
            },
          },
    ]
}