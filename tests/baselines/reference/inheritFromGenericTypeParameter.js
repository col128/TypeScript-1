//// [inheritFromGenericTypeParameter.ts]
class C<T> extends T { }
interface I<T> extends T { }

//// [inheritFromGenericTypeParameter.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return C;
}(T));
