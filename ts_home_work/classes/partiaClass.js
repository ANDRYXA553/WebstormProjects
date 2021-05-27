"use strict";
exports.__esModule = true;
exports.Partia = void 0;
var Partia = /** @class */ (function () {
    function Partia(name, headDeputat, DeputatsArray) {
        this.name = name;
        this.headDeputat = headDeputat;
        this.DeputatsArray = DeputatsArray;
    }
    Partia.prototype.deleteDeputat = function (name) {
        this.DeputatsArray = this.DeputatsArray.filter(function (value) { return value.name !== name; });
    };
    Partia.prototype.showHabarniki = function () {
        this.DeputatsArray.filter(function (value) {
            value.honestly <= 50 ? console.log(value.name, value.honestly) : false;
        });
    };
    Partia.prototype.TheMostHabarnikLog = function () {
        var theMostHabarnik = this.DeputatsArray.reduce(function (previousValue, currentValue) {
            if (previousValue.honestly > currentValue.honestly) {
                return previousValue;
            }
            return currentValue;
        });
        console.log(theMostHabarnik);
        return theMostHabarnik;
    };
    return Partia;
}());
exports.Partia = Partia;
