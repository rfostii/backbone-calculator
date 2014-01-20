define([
  'jquery',
  'underscore',
  'backbone',  
], function($, _, Backbone){
    var ScoreBoardModel = Backbone.Model.extend({
        defaults: {
            result: 0
        },
        clear: function() {
            this.set({result: 0});
        },
        update: function(value) {
          this.model.set({result: value});
        } 
    });    
    return ScoreBoardModel;
});
