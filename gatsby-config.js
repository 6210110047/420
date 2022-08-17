const {resolve} = require('path')
module.exports = {
    plugins : [
        {
            resolve: '@directus/gatsby-source-directus',
            options: {
              url: `https://uj1n8ff9.directus.app/`, // Fill with your Directus instance address
              auth: {
                //token: 'my_secret_token', // You can use a static token from an user
      
                // Or you can use the credentials of an user
                email: '6210110047@psu.ac.th',
                password: '4!pDGkusQON5d5V]U42itb[S',
              },
            },
          },
    ]
}