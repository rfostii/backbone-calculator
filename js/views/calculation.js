define([
  'jquery',
  'underscore',
  'backbone', 
  'text!templates/calculation.html' 
], function($, _, Backbone, tpl) {
    var CalculationView = Backbone.View.extend({          
        initialize: function() {                              
            this.template =  _.template(tpl);        
            this.attachEvents();
        },
        attachEvents: function() {
            this.$el.on('click', '.remove', $.proxy( this.delete, this ));
            this.$el.on('click', '.change', $.proxy( this.change, this ));
            this.$el.on('blur', '.firstValue, .secondValue', $.proxy( this.endEdit, this ));        
            this.$el.on('keypress', '.firstValue, .secondValue', $.proxy( this.pressEnter, this ));        
            /* custom events */
            this.listenTo(this, 'setValue', this.setValue);
            this.listenTo(this, 'setOperation', this.setOperation);
            this.listenTo(this, 'calculate', this.calculate);                                                
        },
        delete: function() { 
            this.remove();
            this.model.collection.trigger('remove', this.model);                  
        },
        change: function() {
            this.$('.firstValue').attr('contenteditable', true).focus();        
        },
        endEdit: function() {
            this.model.set({firstValue: this.$('.firstValue').text()});
            this.model.set({secondValue: this.$('.secondValue').text()});
            this.calculate();
        },
        pressEnter: function(ev) {
            if (ev.keyCode == 9) {
                _.delay(function() {
                    this.$('.firstValue').blur();
                    this.$('.secondValue').attr('contenteditable', true).focus();                
                }, 100);                      
            } else if (ev.keyCode == 13) {
                _.delay(function() {
                    this.$(ev.target).blur();                                
                }, 100);                        
            }
        },
        setValue: function(value) {            
            var oldFirstValue = this.model.get('firstValue');
            var oldSecondValue = this.model.get('secondValue');        

            if (!this.model.get('operation')) {
                this.model.set('firstValue', oldFirstValue + value);
                return true;
            }
            this.model.set('secondValue', oldSecondValue + value);       
        },    
        setOperation: function(operation) {                   

            this.model.set('operation', operation);        
        },
        calculate: function() {
           this.model[this.model.get('operation')]();
           this.render();
        },    
        render: function() {       
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return CalculationView;    
});
