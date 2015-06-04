import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  extension: DS.attr('string'),
  name: DS.attr('string'),
  status: DS.attr('string'),
  sipuser: DS.attr('string'),
});
