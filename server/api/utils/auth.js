require('dotenv').config()
const AuthenticationClient = require('auth0').AuthenticationClient;

const axios = require('axios');

class Auth {
    constructor() {

        this.auth0 = new AuthenticationClient({
            domain: process.env.AUTH_DOMAIN,
            clientID: process.env.AUTH_CLIENT_ID
        });

    }

    async signUp(email, password, username, user_metadata) {
        try {
            let data = {
                email: email,
                password: password,
                username: username,
                connection: process.env.AUTH_CONNECTION, // Optional field.
                user_metadata: user_metadata
            };
            let result = await this.auth0.database.signUp(data);
            return result
        } catch (error) {
            return error
        }
    }

    async signIn(username, password) {

        // try {
        //     let data = {
        //         connection: process.env.AUTH_CONNECTION
        //     };

        //     let userData = await this.auth0.oauth.signIn(data);
        //     return userData
        // } catch (error) {
        //     return error
        // }

        // var data = {
        //     client_id: process.env.AUTH_CLIENT_ID,  // Optional field.
        //     username: 'maxgong',
        //     password: 'Postpak1266',
        //     realm: process.env.AUTH_CONNECTION, // Optional field.
        //     scope: 'openid'  // Optional field.
        //   };
          
        //   this.auth0.oauth.token(data, function (err, userData) {
        //     if (err) {
        //       // Handle error.
        //     }
          
        //     console.log(userData);
        //   });

    }

}

module.exports = Auth;