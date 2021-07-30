var a = 2;
var b = 0;

switch (a) {
    case 1:
        b = 1;
        break;
    case 2:
        b = 2;
        break;
    default:
        b = 0;
        break;
}
document.writeln("<br> " + b);