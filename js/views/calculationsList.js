define([
  'jquery',
  'underscore',
  'backbone',
  'views/calculation'
], function($, _, Backbone, CalculationView) {
    var CalculationsView = Backbone.View.extend({    
        initialize: function() {        
            this.el = $('.calculations_container');  
            this.attachEvents();      
        },  
        attachEvents: function() {
            this.collection.bind('add', this.render, this);
            this.collection.bind('remove', this.remove, this);               
        },  
        render: function() {        
            var self = this;

            this.el.html('');             
            _.each(this.collection.toArray(), function (calc, i) {                        
                self.el.append((new CalculationView({model: calc})).render().el);
            });
        },        
        remove: function(model) {  
            this.collection.remove(model);                        
        }
    });
    return CalculationsView;    
});
