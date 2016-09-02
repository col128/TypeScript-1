//// [extBaseClass1.ts]
module M {
    export class B {
	    public x=10;
    }

    export class C extends B {
    }
}

module M {
    export class C2 extends B {
    }
}

module N {
    export class C3 extends M.B {
    }
}


//// [extBaseClass1.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var M;
(function (M) {
    var B = (function () {
        function B() {
            this.x = 10;
        }
        return B;
    }());
    M.B = B;
    var C = (function (_super) {
        __extends(C, _super);
        function C() {
            var _this = _super.apply(this, arguments) || this;
            return _this;
        }
        return C;
    }(B));
    M.C = C;
})(M || (M = {}));
var M;
(function (M) {
    var C2 = (function (_super) {
        __extends(C2, _super);
        function C2() {
            var _this = _super.apply(this, arguments) || this;
            return _this;
        }
        return C2;
    }(M.B));
    M.C2 = C2;
})(M || (M = {}));
var N;
(function (N) {
    var C3 = (function (_super) {
        __extends(C3, _super);
        function C3() {
            var _this = _super.apply(this, arguments) || this;
            return _this;
        }
        return C3;
    }(M.B));
    N.C3 = C3;
})(N || (N = {}));
