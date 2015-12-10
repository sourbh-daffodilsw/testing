var sum = require("@applane/privatemodule2");
var Q = require("q");

var print = function(a,b){
var d = Q.defer();
console.log("a >>>>>>"+a);
console.log("b >>>>>>"+b);
console.log("a+b >>>>"+sum(a,b));
d.resovle();
return d.promise;
}


module.exports = print;
