const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const ISSUER = process.env.ISSUER;
const IDP_OIDC = process.env.IDP_OIDC;
const IDP_GOOGLE = process.env.IDP_GOOGLE;

const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  idp: {
    idp_google: IDP_GOOGLE,
    idp_oidc: IDP_OIDC,
  },
};
