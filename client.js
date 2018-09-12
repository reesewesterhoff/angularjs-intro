console.log('client js is loaded');

let myApp = angular.module('MyApp', []);

myApp.controller('WelcomeController', function(){
    let self = this;

    self.message = 'Hello';
    self.greet = function(message){
        console.log('Hello ', message); 
    }
    self.pointyThings = [
        { name:'knives', sharpness: 10 },
        { name: 'wit', sharpness: 11 },
        { name: 'sea urchins', sharpness: 5, isPoisonous: true } 
    ];
    
});
