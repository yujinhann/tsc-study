enum WeekDay { Mon, Tue, Wed, Thu = Tue + Wed }
let thu2: number = 10 * 2;
enum WeekDay2 { Mon = 10, Tue, Wed = 10 << 2, Thr = thu2 }
enum WeekDay3 { Mon = "MonDay", Tue = "Tuesday" }

console.log(WeekDay2[WeekDay2.Tue]);
