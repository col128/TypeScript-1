//// [classAbstractInheritance.ts]
abstract class A {}

abstract class B extends A {}

class C extends A {}

abstract class AA {
    abstract foo();
}

abstract class BB extends AA {}

class CC extends AA {}

class DD extends BB {}

abstract class EE extends BB {}

class FF extends CC {}

abstract class GG extends CC {}

//// [classAbstractInheritance.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return C;
}(A));
var AA = (function () {
    function AA() {
    }
    return AA;
}());
var BB = (function (_super) {
    __extends(BB, _super);
    function BB() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return BB;
}(AA));
var CC = (function (_super) {
    __extends(CC, _super);
    function CC() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return CC;
}(AA));
var DD = (function (_super) {
    __extends(DD, _super);
    function DD() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return DD;
}(BB));
var EE = (function (_super) {
    __extends(EE, _super);
    function EE() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return EE;
}(BB));
var FF = (function (_super) {
    __extends(FF, _super);
    function FF() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return FF;
}(CC));
var GG = (function (_super) {
    __extends(GG, _super);
    function GG() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return GG;
}(CC));
