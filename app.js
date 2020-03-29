var a;
(function (a) {
    a[a["active"] = 0] = "active";
    a[a["pasive"] = 1] = "pasive";
    a[a["jas"] = 2] = "jas";
    a[a["ead"] = 3] = "ead";
    a[a["onbord"] = 4] = "onbord";
})(a || (a = {}));
console.log(a.onbord);
