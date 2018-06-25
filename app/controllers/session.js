import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        login() {
            if (this.get('name') === "admin" && this.get('pass') === "admin"){
                this.set('logged', true);
            }
            if (this.get('logged')){
                this.transitionToRoute('qacode.forms.inputs');
            }
        },
        logout() {
            this.set('logged', false);
            this.transitionToRoute('qacode.login');
        }
    }
});
