import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: 'form-group form-inline',
  ids: null, // value from parent
  labelText: null, // value from parent
  idLabel: null, // internal
  idInput: null, // internal
  defaultText: 'Select an option',
  init() {
    this._super(...arguments);
    if(this.get('ids') !== null) {
      this.set('idLabel', `lbl${this.get('ids').capitalize()}`);
      this.set('idInput', `txt${this.get('ids').capitalize()}`);
    } //else {}, not showing nothing when user not typed text for this attrs
    this.set('labelText', this.get('labelText'));
    if (this.get('defaultText') !== null) {
      this.set('defaultText', this.get('defaultText'));
    }
  }
});
