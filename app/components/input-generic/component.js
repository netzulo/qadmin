import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  idLabel: null,
  idInput: null,
  title: null, // value from parent
  init() {
    this._super(...arguments)
    this.set('idLabel', `lbl${this.get('title')}`);
    this.set('idInput', `txt${this.get('title')}`);
  }
});
