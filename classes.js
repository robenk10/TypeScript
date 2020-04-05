"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log(this.id + "   " + this.name);
        for (var i = 0; i < 4; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    };
    return Student;
}());
var robin = /** @class */ (function (_super) {
    __extends(robin, _super);
    function robin(id, name) {
        var _this = _super.call(this, 10, "eo") || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    robin.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("hello world");
    };
    return robin;
}(Student));
var a;
;
var b;
b = prompt("enter the name");
var oj = new robin(a, b);
oj.display();
