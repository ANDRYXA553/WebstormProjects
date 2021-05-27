var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triagle = /** @class */ (function (_super) {
    __extends(Triagle, _super);
    function Triagle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triagle.prototype.perimetr = function () {
        return this.a + this.b + this.c;
    };
    Triagle.prototype.area = function () {
        return this.a * this.b * this.c;
    };
    return Triagle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimetr = function () {
        return this.a + this.b;
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    return Rectangle;
}(Shape));
var TRIANGLE = new Triagle(4, 2, 4);
var RECTANGLE = new Rectangle(4, 4);
var figures = [TRIANGLE, RECTANGLE];
console.log(figures);
figures.forEach(function (value) {
    console.log(value.area());
});
