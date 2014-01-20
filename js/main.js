require.config({
    paths: {
        text: 'frameworks/require-text',
        jquery: 'frameworks/jquery',
        underscore: 'frameworks/underscore',
        backbone: 'frameworks/backbone',
        templates: '../templates'
    },
    shim: {
        underscore: {
        exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require([  
    'app',
], function(App){    
    App.init();
});