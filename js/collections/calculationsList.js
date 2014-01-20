define([
  'jquery',
  'underscore',
  'backbone', 
  'models/calculation' 
], function($, _, Backbone, CalculationModel){
    var CalculationsList = Backbone.Collection.extend({
        model: CalculationModel
    });    
    return CalculationsList;
});
