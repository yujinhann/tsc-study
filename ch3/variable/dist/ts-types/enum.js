var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Mon"] = 0] = "Mon";
    WeekDay[WeekDay["Tue"] = 1] = "Tue";
    WeekDay[WeekDay["Wed"] = 2] = "Wed";
    WeekDay[WeekDay["Thu"] = 3] = "Thu";
})(WeekDay || (WeekDay = {}));
let thu2 = 10 * 2;
var WeekDay2;
(function (WeekDay2) {
    WeekDay2[WeekDay2["Mon"] = 10] = "Mon";
    WeekDay2[WeekDay2["Tue"] = 11] = "Tue";
    WeekDay2[WeekDay2["Wed"] = 40] = "Wed";
    WeekDay2[WeekDay2["Thr"] = thu2] = "Thr";
})(WeekDay2 || (WeekDay2 = {}));
var WeekDay3;
(function (WeekDay3) {
    WeekDay3["Mon"] = "MonDay";
    WeekDay3["Tue"] = "Tuesday";
})(WeekDay3 || (WeekDay3 = {}));
console.log(WeekDay2[WeekDay2.Tue]);
