import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: 'XX-XXXX-X_abcd1234',
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: 'code', // 'code' | 'link'
      loginWith: {
        // OPTIONAL - Hosted UI configuration
        oauth: {
          domain: 'your_cognito_domain',
          scopes: [
            'phone',
            'email',
            'profile',
            'openid',
            'aws.cognito.signin.user.admin'
          ],
          redirectSignIn: ['http://localhost:3000/'],
          redirectSignOut: ['http://localhost:3000/'],
          responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
      }
    }
  },
  API: {
    endpoints: [
      {
        name: "dml",
        endpoint: "https://470pt4m7q7.execute-api.us-west-1.amazonaws.com/dev1",
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
});

// You can get the current config object
//const currentConfig = Amplify.getConfig();



//import { Auth } from "aws-amplify";
// export default {
//   REGION: "us-west-1",
//   USER_POOL_ID: "us-west-1_CpcNdzKye",
//   USER_POOL_APP_CLIENT_ID: "33f7bfpjie1hhjtr7to1vkfpni",
//   Auth: {
//     identityPoolId: 'us-west-1:7225af83-d8d2-46a1-95cf-9386938e9dae', //REQUIRED - Amazon Cognito Identity Pool ID
//     region: 'us-west-1', // REQUIRED - Amazon Cognito Region
//     userPoolId: 'us-west-1_CpcNdzKye', //OPTIONAL - Amazon Cognito User Pool ID
//     userPoolWebClientId: '33f7bfpjie1hhjtr7to1vkfpni', //OPTIONAL - Amazon Cognito Web Client ID
//   },
//   Storage: {
//     AWSS3: {
//       bucket: 'dml-advertiser', //REQUIRED -  Amazon S3 bucket name
//       region: 'us-west-1', //OPTIONAL -  Amazon service region
//     }
//   },
  // API: {
  //   endpoints: [
  //     {
  //       name: "dml",
  //       endpoint: "https://470pt4m7q7.execute-api.us-west-1.amazonaws.com/dev1",
  //       custom_header: async () => {
  //         return {
  //           Authorization: `Bearer ${(await Auth.currentSession())
  //             .getIdToken()
  //             .getJwtToken()}`,
  //         };
  //       },
  //     },
  //   ],
  // },
// };
