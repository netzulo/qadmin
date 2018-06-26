import Component from '@ember/component';

export default Component.extend({
    errored: null,
    titleText: null,
    message: null,
    messageError: 'An error obtained',
    init() {
        this._super(...arguments);
        this.set('errored', this.get('errored'));
        this.set('titleText', this.get('titleText'));
        this.set('message', this.get('message'));
        this.set('messageError', this.get('messageError'));
    }
});
