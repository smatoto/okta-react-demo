# Okta React Demo

_This is based on [okta/samples-js-react](https://github.com/okta/samples-js-react/tree/master/custom-login)_ Custom Login Page example.

This example shows you how to use the [Okta React Library](https://github.com/okta/okta-react) and [React Router](https://github.com/ReactTraining/react-router) to login a user to a React application. The login is achieved with the [Okta Sign In Widget](https://developer.okta.com/code/javascript/okta_sign-in_widget/), which gives you more control to customize the login experience within your app.

This example is built with [Create React App](https://create-react-app.dev/).

## Prerequisites

Before running this sample, you will need the following:

- An Okta Developer Account, you can sign up for one at https://developer.okta.com/signup/.
- An Okta Application, configured for Single-Page App (SPA) mode. This is done from the Okta Developer Console, you can see the [OIDC SPA Setup Instructions](https://developer.okta.com/docs/guides/sign-into-spa/react/before-you-begin/). When following the wizard, use the default properties. They are are designed to work with our sample applications.

## Running This Example

To run this application, you first need to clone this repo and then enter into this directory:

```bash
git clone https://github.com/smatoto/okta-react-demo.git
cd okta-react-demo
```

Then install dependencies:

```bash
npm install
```

Now you need to gather the following information from the Okta Developer Console:

- **Issuer** - This is the URL of the authorization server that will perform authentication. All Developer Accounts have a "default" authorization server. The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://dev-1234.oktapreview.com/oauth2/default`.
- **Client Id** - The client ID of the SPA (React) application that you created earlier. This can be found on the "General" tab of an application, or the list of applications. This identifies the application that tokens will be minted for.
- **Redirect URI** - The callback route to the application. Okta uses this URI to redirect back to your application with information about the user.
- **OIDC IDP** - The Okta IdP ID of an OIDC-based [identity provider](https://developer.okta.com/docs/guides/add-an-external-idp/oktatookta/configure-idp-in-okta/). This can be used for Okta-to-Okta federation.
- **Google IDP** - The Okta IdP ID of a Google-based [identity provider](https://developer.okta.com/docs/guides/add-an-external-idp/google/configure-idp-in-okta/).

  These values must exist as environment variables. They can be exported in the shell, or saved in a file named `.env`. (This is the parent directory, relative to this README) See [dotenv](https://www.npmjs.com/package/dotenv) for more details on this file format.

```ini
ISSUER=
CLIENT_ID=
REDIRECT_URI=
IDP_OIDC=
IDP_GOOGLE=
```

With variables set, start the app server:

```
npm start
```

Now navigate to http://localhost:8080 in your browser.

If you see a home page that prompts you to login, then things are working! Clicking the **Log in** button will render a custom login page component that uses the Okta Sign-In Widget to perform authentication.

You can login with the same account that you created when signing up for your Developer Org, or you can use a known username and password from your Okta Directory. If both **OIDC** and **Google IDP** are configured, you can also authenticate using a Google account and an account from another Okta tenant.

**Note:** If you are currently using your Developer Console, you already have a Single Sign-On (SSO) session for your Org. You will be automatically logged into your application as the same user that is using the Developer Console. You may want to use an incognito tab to test the flow from a blank slate.
