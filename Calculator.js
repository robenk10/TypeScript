"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operation = /** @class */ (function () {
    function operation() {
    }
    operation.prototype.Add = function (num1, num2) {
        return num1 + num2;
    };
    operation.prototype.subtract = function () {
        throw new Error("Method not implemented.");
    };
    operation.prototype.multi = function () {
        throw new Error("Method not implemented.");
    };
    operation.prototype.div = function () {
        throw new Error("Method not implemented.");
    };
    return operation;
}());
var obj = new operation();
console.log(obj.Add(5, 6));
