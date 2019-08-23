/**
 * Company: Microsoft.
 *
 * Given a clock time in hh:mm format, determine, to the nearest degree, the angle between the hour and the minute hands.
 *
 * Bonus: When, during the course of a day, will the angle be zero?
 */
const calcAngle = function(time) {
  const [hours, minutes] = time.split(':');
  const angleOfMinute = 6 * parseInt(minutes);
  const angleOfHour = 0.5 * (parseInt(hours) * 60 + parseInt(minutes));
  const angle = Math.abs(angleOfHour - angleOfMinute);
  return Math.min(360 - angle, angle);
};

console.log(calcAngle('3:30'));
console.log(calcAngle('9:00'));
console.log(calcAngle('12:30'));
