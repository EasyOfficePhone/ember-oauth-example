import {configurable} from 'torii/configuration';
import Oauth2Code from 'torii/providers/oauth2-code';

var EopOauth2 = Oauth2Code.extend({
  name: 'eop-oauth2',
  baseUrl: 'http://localhost:7001/oauth/authorize',
  requiredUrlParams: ['sipuser'],
  sipuser: 'easyofficephone-101',

  responseParams: ['code'],
  //scope: configurable('scope', 'email'),

  //state: 'STATE',

  redirectUri: configurable('redirectUri', function() {
    return this._super();
  })

});

export default EopOauth2;
