import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'session',
    init(){
        this._super(...arguments);
        this.set('logged', false);
        this.set('')
    },
    model() {
        return {
            logged: this.get('logged'),
            chkBox001: [
                {
                    'ids':  'chkFirst001',
                    'labelText': 'Checkbox multiple generic, option 1'
                },
                {
                    'ids':  'chkFirst002',
                    'labelText': 'Checkbox multiple generic, option 2'
                },
                {
                    'ids':  'chkFirst003',
                    'labelText': 'Checkbox multiple generic, option 3'
                }
            ],
            radio001: [
                {
                    'ids':  'radioFirst001',
                    'labelText': 'Radio multiple generic, option 1'
                },
                {
                    'ids':  'radioFirst002',
                    'labelText': 'Radio multiple generic, option 2'
                },
                {
                    'ids':  'radioFirst003',
                    'labelText': 'Radio multiple generic, option 3'
                }
            ],

        }
    },
});
