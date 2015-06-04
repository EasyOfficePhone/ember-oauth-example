import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    eopLogin: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'eop-oauth2');
      return;
    }
  }
});
