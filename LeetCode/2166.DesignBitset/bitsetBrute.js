/**
 * @param {number} size
 */
var Bitset = function (size) {
  this.bits = new Array(size).fill(0);
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
  this.bits[idx] = 1;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
  this.bits[idx] = 0;
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
  for (let i = 0; i < this.bits.length; i++) {
    if (this.bits[i] == 0) {
      this.bits[i] = 1;
    } else {
      this.bits[i] = 0;
    }
  }
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
  for (let i = 0; i < this.bits.length; i++) {
    if (this.bits[i] == 0) {
      return false;
    }
  }
  return true;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
  for (let i = 0; i < this.bits.length; i++) {
    if (this.bits[i] == 1) {
      return true;
    }
  }
  return false;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
  let count = 0;
  for (let i = 0; i < this.bits.length; i++) {
    if (this.bits[i] == 1) {
      count++;
    }
  }
  return count;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
  var str = "";
  for (let i = 0; i < this.bits.length; i++) {
    str = str.concat(this.bits[i]);
  }
  return str;
};

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */

module.exports = { Bitset };
