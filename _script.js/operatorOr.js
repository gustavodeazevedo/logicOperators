function logicalOr1(var1, var2){
    return(var1 || var2);
}

var1 = false;
var2 = true;

console.log(logicalOr1(var1, var2));

//*------------------------------------------------

function logicalOr2(var1, var2) {
 return(var1 || var2);
}

var1 = false;
var2 = false;

console.log(logicalOr2(var1, var2));

//*------------------------------------------------

function logicalOr3 (var1, var2) {
 return(var1 || var2);
}

var1 = true;
var2 = true;

console.log(logicalOr3(var1, var2));

//*------------------------------------------------

function logicalOr4 (var1, var2) {
 return(var1 === var2) || (var1 !== var2);
} 

var1 = true;
var2 = false;

console.log(logicalOr4(var1, var2));
