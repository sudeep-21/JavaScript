var a = 10;
var b = 20;
var c = 30;

//Normal IF
if(a < b) {
    document.writeln("<br> a < b");
}

//If Else
if(a > b) {
    document.writeln("<br> a > b");
} else {
    document.writeln("<br> a < b");
}

//Nested If Else
if(a > b) {
    if(a > c) {
        document.writeln("<br> a is greatest...");
    } else {
        document.writeln("<br> c is greatest...");
    }
} else {
    if(b > c) {
        document.writeln("<br> b is greatest...");
    } else {
        document.writeln("<br> c is greatest...");
    }
}

//If Else If
if(a > b) {
    document.writeln("<br> a > b");
} else if(a <b) {
    document.writeln("<br> a < b");
}