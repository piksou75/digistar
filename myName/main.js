console.log('Bienvenue dans votre premier exercice sur JavaScript !');
var month = "novembre";
console.log(month);
function sayHello (name){
    console.log ("Je m 'appelle ",name);
}
sayHello("sokona");
function addTwo(nbr){
    var result;
result = nbr + 2;
    console.log(result);
}
addTwo(8);
function displySum(nbr1, nbr2){
    var result;
    result = nbr1 + nbr2;
    console.log(result);
}
displySum(10,10);

var name1 ="Annie ";
var name2 ="Amani ";
var name3 ="Sokona ";
function helloName(name1,name2,name3){
    console.log ("Bonjour "+name1+name2+name3+"!!!!");

}
helloName(name1,name2,name3);

function auCarre (a2,b2,c2,d2){
    return (a**2+b**2+c**2+d**2);

}


var rep = auCarre(5,4,3,2);
console.log(rep);

