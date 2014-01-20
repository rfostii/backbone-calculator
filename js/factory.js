define([
  'jquery',
  'underscore',
  'backbone',
  'models/scoreBoard',
  'models/calculation',
  'views/calculation',
  'views/calculationsList',
  'views/numbers',
  'views/operations',
  'views/scoreBoard',
  'collections/calculationsList'  
], function($, _, Backbone, ScoreBoardModel, CalculationModel,
        CalculationView, CalculationsView, NumbersView, 
        OperationsView, ScoreBoardView, CalculationsList) {
    
    var Factory = function() {
        this.getScoreBoard = function() {
            throw 'This method must be implemented';
        }

        this.getCalculation = function() {
            throw 'This method must be implemented';
        }

        this.getCalculationsList = function() {
            throw 'This method must be implemented';
        }

        this.getNumbers = function() {
            throw 'This method must be implemented';
        }

        this.getOperations = function() {
            throw 'This method must be implemented';
        }
    }

    var ModelFactory = function() {
        this.getScoreBoard = function(options) {
            return new ScoreBoardModel(options);
        }
        this.getCalculation = function(options) {
            return new CalculationModel(options);
        }    
    }

    var ViewFactory = function() {
        this.getScoreBoard = function(options) {
            return new ScoreBoardView(options);
        }
        this.getCalculation = function(options) {
            return new CalculationView(options);
        } 
        this.getCalculationsList = function(options) {       
            return new CalculationsView(options)
        }  
        this.getNumbers = function(options) {
            return new NumbersView(options);
        }
        this.getOperations = function(options) {
            return new OperationsView(options);
        }  
    }

    var CollectionFactory = function() {
        this.getCalculationsList = function(options) {
            return new CalculationsList(options);
        }  
    }

    ModelFactory.prototype = new Factory();
    ViewFactory.prototype = new Factory();
    CollectionFactory.prototype = new Factory();

    ModelFactory.prototype.constructor = ModelFactory;
    ViewFactory.prototype.constructor = ViewFactory;
    CollectionFactory.prototype.constructor = CollectionFactory;    

    return {
        models: new ModelFactory(),
        views: new ViewFactory(),
        collections: new CollectionFactory()
    }    
});
