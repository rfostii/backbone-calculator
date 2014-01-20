define([
  'jquery',
  'underscore',
  'backbone', 
  'text!templates/numbers.html' 
], function($, _, Backbone, tpl){
    var NumbersView = Backbone.View.extend({
        el: $('#calc-form #number-buttons'),
        initialize: function() {         
            this.template =  _.template(tpl);        
        },    
        render: function() {       
            this.$el.html(this.template());
            return this;
        }
    });
    return NumbersView;    
});
