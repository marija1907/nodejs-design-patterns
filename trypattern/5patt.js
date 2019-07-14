//extremly popular Revealing module pattern
//exposing only properties/methods we want via an returned object
var one = 85;
var two = 95;
function onetwo(){
    console.log(one * two);
}
module.exports = {
    onetwo:onetwo
}