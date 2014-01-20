define([
  'jquery',
  'underscore',
  'backbone',  
], function($, _, Backbone){
    var CalculationModel = Backbone.Model.extend({
        defaults: {
            firstValue: '',
            secondValue: '',
            operation: null,
            result: 0        
        },
        add: function() {       
            this.set({result: parseInt(this.get('firstValue')) + parseInt(this.get('secondValue'))});        
            return this.get('result');
        },
        sub: function() {
            this.set({result: parseInt(this.get('firstValue')) - parseInt(this.get('secondValue'))});        
            return this.get('result');
        },
        mul: function() {
            this.set({result: parseInt(this.get('firstValue')) * parseInt(this.get('secondValue'))});        
            return this.get('result');
        },
        div: function() {
            this.set({result: parseInt(this.get('firstValue')) / parseInt(this.get('secondValue'))});        
            return this.get('result');
        }
    });    
    return CalculationModel;
});
