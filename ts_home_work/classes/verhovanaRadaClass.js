"use strict";
exports.__esModule = true;
exports.VerhovnaRada = void 0;
var VerhovnaRada = /** @class */ (function () {
    function VerhovnaRada(partias) {
        this.partias = partias;
    }
    VerhovnaRada.prototype.deletePartia = function (name) {
        this.partias = this.partias.filter(function (value) { return value.name !== name; });
    };
    VerhovnaRada.prototype.showPartias = function () {
        this.partias.forEach(function (value) {
            console.log(value);
        });
    };
    VerhovnaRada.prototype.showChoosenPartia = function (name) {
        var foundPartia = this.partias.filter(function (value) { return value.name === name; });
        console.log(foundPartia);
    };
    VerhovnaRada.prototype.theMostHabarnikRadi = function () {
        var arrayOfMostHabarniks = [];
        this.partias.forEach(function (value) {
            arrayOfMostHabarniks.push(value.DeputatsArray.reduce(function (previousValue, currentValue) { return previousValue.honestly < currentValue.honestly ? previousValue : currentValue; }));
        });
        var theMostHabarnik = arrayOfMostHabarniks.reduce(function (previousValue, currentValue) { return previousValue.honestly < currentValue.honestly ? previousValue : currentValue; });
        console.log(theMostHabarnik);
    };
    return VerhovnaRada;
}());
exports.VerhovnaRada = VerhovnaRada;
