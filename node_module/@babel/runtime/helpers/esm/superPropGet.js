import get from "./get.js";
import getPrototypeOf from "./getPrototypeOf.js";
function _superPropGet(t, o, e, r) {
  var p = get(getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
export { _superPropGet as default };