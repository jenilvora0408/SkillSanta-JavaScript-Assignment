// Question 1 -> How to fetch millisecond according to universal time from a given Date object?

var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
var a = dateToday.getUTCMilliseconds();
console.log(a);