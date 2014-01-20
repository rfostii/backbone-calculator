define([
  'jquery',
  'underscore',
  'backbone',  
  'text!templates/scoreboard.html'
], function($, _, Backbone, tpl){
    var ScoreBoardView = Backbone.View.extend({  
        el: $('#calc-form div:first'),    
        initialize: function() {    
            this.attachEvents();
            this.template = _.template(tpl);
            this.render();
        },
        attachEvents: function() {
            this.listenTo(this, 'setValue', this.setValue);
            this.listenTo(this, 'setOperation', this.setOperation);        
        },
        setValue: function(value) {
            var oldValue = this.model.get('result');
            if (oldValue) {            
                this.model.set({result: oldValue + value});            
            } else {        
                this.model.set({result: value});
            }
            this.render();
        },
        setOperation: function(operation) {
            var value = this.model.get('result');

            if (Number(value)) {
                this.model.set({result: value + operation});   
                this.render();
            }
        },
        clear: function() {
            this.model.clear();
            this.render();
        },
        render: function() {        
            this.$el.html( this.template(this.model.toJSON()) );
        }
    });   
    return ScoreBoardView; 
});
