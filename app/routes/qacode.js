import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'session',
    init(){
        this._super(...arguments);
        this.set('logged', false);
    },
    model() {
        return { logged: this.get('logged')}
    },
});
