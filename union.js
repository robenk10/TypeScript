function Add(n1, n2) {
    var res;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        res = n1 + n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    return res;
}
var result = Add(2, 5);
console.log(result);
var res = Add("robin", "kedari");
console.log(res);
