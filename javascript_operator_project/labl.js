//JS document
var secondsInAMinute = "60";
var minutesInAHour = "60";
var hoursInADay = "24";
var daysInAYear = "365";

var secondsInAHour = secondsInAMinute * minutesInAHour;
document.write("The number of seconds in an hour is " + secondsInAHour);
document.write("<br>")

var secondsInADay = secondsInAHour * hoursInADay;
document.write("The number of seconds in a day are " + secondsInADay);
document.write("<br>");

var secondsInAYear = secondsInADay * daysInAYear;
document.write("The numbers of seconds in a year are " +secondsInAYear)
document.write("<br>");
document.write("<br>");
document.write("Created by Bryce Pavlov");
