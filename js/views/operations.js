define([
  'jquery',
  'underscore',
  'backbone',  
  'text!templates/operations.html'
], function($, _, Backbone, tpl){
    var OperationsView = Backbone.View.extend({
        el: $('#calc-form #operation-buttons'),
        initialize: function() {         
            this.template =  _.template(tpl);        
        },  
        render: function() {       
            this.$el.html(this.template());
            return this;
        }
    });    
    return OperationsView;
});
