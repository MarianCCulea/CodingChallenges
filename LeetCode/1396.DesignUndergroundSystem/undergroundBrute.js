//very bad way of solving this

var UndergroundSystem = function () {
  this.checkIns = new Map();
  this.times = new Map();
  this.timeshelp = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  let string = `${stationName}-${t}`;
  this.checkIns.set(`${id}`, string);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  if (this.checkIns.has(`${id}`)) {
    let str = this.checkIns.get(`${id}`);
    let station = str.split("-")[0];
    let time = str.split("-")[1];
    this.checkIns.delete(`${id}`);
    let string = `${station}-${stationName}`;
    if (this.times.has(string)) {
      let oldtime = this.times.get(string);
      let count = this.timeshelp.get(string);
      count++;
      this.times.set(string, t - time + oldtime);
      this.timeshelp.set(string, count);
    } else {
      this.timeshelp.set(string, 1);
      this.times.set(string, t - time);
    }
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let avg =
    this.times.get(`${startStation}-${endStation}`) /
    this.timeshelp.get(`${startStation}-${endStation}`);
  return avg;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

module.exports = { UndergroundSystem };
