/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import config from './config';

const Login = () => {
  const { oktaAuth } = useOktaAuth();
  useEffect(() => {
    const { issuer, clientId, redirectUri, scopes } = config.oidc;
    const { idp_google, idp_oidc } = config.idp;
    const baseUrl = issuer.split('/oauth2')[0];
    const widget = new OktaSignIn({
      baseUrl,
      clientId,
      redirectUri,
      logo: '/react.svg',
      language: 'en',
      i18n: {
        en: {
          'primaryauth.title': 'Okta - Custom Login',
        },
      },
      authParams: {
        issuer,
        scopes,
      },
      idps: [
        { type: 'Google', id: idp_google },
        // { id: idp_oidc, text: 'Sign in with Kollab' },
      ],
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      ({ tokens }) => {
        oktaAuth.handleLoginRedirect(tokens);
      },
      err => {
        throw err;
      },
    );
    // Send OTP automatically
    widget.on('afterRender', function (context) {
      var smsGroup = document.getElementsByClassName('sms-request-button');
      if (smsGroup.length) smsGroup[0].click();
    });

    return () => widget.remove();
  }, [oktaAuth]);

  return (
    <div>
      <div id="sign-in-widget" />
    </div>
  );
};
export default Login;
