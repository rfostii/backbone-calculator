define([
  'jquery',
  'underscore',
  'backbone',
  'factory'  
], function($, _, Backbone, factory) {    
    var App = (function(){
        //models
        var scoreBoardModel;          
        var calculationModel;

        //views
        var scoreBoardView;
        var operationsView;
        var numbersView;
        var calculationView;
        var calculationsListView;

        //collections
        var calculationsList;

        function numberClick() {        
            scoreBoardView.trigger('setValue', $(this).val());
            calculationView.trigger('setValue', $(this).val());
        }

        function newCalculation() {        
            calculationModel = factory.models.getCalculation();        
            calculationView = factory.views.getCalculation({ model: calculationModel });                
        }

        function operationClick() {
            calculationView.trigger('setOperation', $(this).data('operation'));   
            scoreBoardView.trigger('setOperation', $(this).val());     
        }

        function calculate(event) {
            event.preventDefault();
            calculationView.trigger('calculate');
            calculationsList.add(calculationModel);
            clear();
            newCalculation();
        }

        function clear() {
            scoreBoardView.clear();
        }

        function init() {       
            calculationsList = factory.collections.getCalculationsList();  
            calculationsListView = factory.views.getCalculationsList({ collection: calculationsList });            
            scoreBoardModel = factory.models.getScoreBoard();        
            scoreBoardView = factory.views.getScoreBoard({ model: scoreBoardModel });                        
            operationsView = factory.views.getOperations().render();
            numbersView = factory.views.getNumbers().render();

            //create first view for first calculation
            newCalculation();
                
            //attach event handlers for DOM
            $("#calc-form #number-buttons .number").click(numberClick);
            $("#calc-form #operation-buttons .operation").click(operationClick);
            $("#calc-form .calculate").click(calculate);
            $('.clear').click(clear);                          
        }    

        return {
            init: init
        }
    })();
    return App;
});
