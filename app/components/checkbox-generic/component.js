import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: '',
  list: null, // value from parent,
  elements : null,
  labelText: null, // value from parent
  idLabel: null, // internal
  idInput: null, // internal
  init() {
    this._super(...arguments);
    this.set('elements', []);
    if(this.get('list') !== null) {
        this.get('list').forEach(element => {
            this.get('elements').addObject(
                {
                    'idLabel': `lbl${element.ids.capitalize()}`,
                    'idInput': `txt${element.ids.capitalize()}`,
                    'labelText': element.labelText
                }
            );
        });
      
    } //else {}, not showing nothing when user not typed text for this attrs
  }
});
