"use strict";
exports.__esModule = true;
exports.Deputat = void 0;
var Deputat = /** @class */ (function () {
    function Deputat(id, name, age, gender, honestly, minimum) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestly = honestly;
        this.minimum = minimum;
    }
    Deputat.prototype.tryToGiveHabar = function (habarValue) {
        if (this.honestly > 50) {
            console.log('I AM HONESLY ,NO HABARS');
            return;
        }
        if (this.honestly <= 50 && habarValue > (this.minimum * (this.honestly * 0.01) + this.minimum)) {
            console.log('ok i"ll take  money');
            return;
        }
        if (this.honestly <= 50 && (this.minimum < habarValue) && habarValue < (this.minimum * (this.honestly * 0.01) + this.minimum)) {
            console.log('oh i"ll think about it');
            return;
        }
        console.log('not enough');
    };
    return Deputat;
}());
exports.Deputat = Deputat;
