var fvar = 50;
var svar = 10;

//Arithematic
var sum = fvar + svar;
var sub = fvar - svar;
var mul = fvar * svar;
var div = fvar / svar;
var mod = fvar % svar;

document.writeln("<br> Sum: " + sum);
document.writeln("<br> Sub: " + sub);
document.writeln("<br> Mul: " + mul);
document.writeln("<br> Div: " + div);
document.writeln("<br> Mod: " + mod);

//Assignment
sum += 10;
sub -= 10;
mul *= 10;
div /= 10;
mod %= 10;

document.writeln("<br> Sum: " + sum);
document.writeln("<br> Sub: " + sub);
document.writeln("<br> Mul: " + mul);
document.writeln("<br> Div: " + div);
document.writeln("<br> Mod: " + mod);

//Comparison, Increment / Decrement
if(fvar > svar) {
    document.writeln("<br>" + fvar + " > " + svar);
}
if(svar < fvar) {
    document.writeln("<br>" + svar + " < " + fvar);
}
if(fvar == svar) {
    document.writeln("<br>" + fvar + " = " + svar);
} else if(fvar != svar) {
    document.writeln("<br>" + fvar + " != " + svar);
}
for(fvar = 0; fvar <= 5; fvar++) {
    document.writeln("<br>" + fvar);
}
for(fvar = 5; fvar >= 0; fvar--) {
    document.writeln("<br>" + fvar);
}

//Logical
if (fvar < svar && fvar != 0) {
    document.writeln("<br> Logical &&");
}
if (fvar > svar || fvar != 0) {
    document.writeln("<br> Logical ||");
}