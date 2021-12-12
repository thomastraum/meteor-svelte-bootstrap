import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

import '/node_modules/bootstrap/scss/bootstrap';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '/imports/scss/main.scss';


Meteor.startup(() => {
    new App({
        target: document.getElementById('app')
    });
});