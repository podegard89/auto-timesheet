export default class TimeStamp {
    static msToHours(duration) {
        let calcMinutes = Math.floor((duration / (1000 * 60)) % 60);
        let calcHours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        return `${calcHours + Math.round((calcMinutes / 60) * 2) / 2}`;
    }
    
    static hourCheck(hour) {
        return hour > 12 ? hour - 12 : hour;
    }

    static createTimeString(time) {
        const hours = TimeStamp.hourCheck(time.getHours());
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    setStartTime() {
        this.startTime = new Date();
        this.startTimeString = TimeStamp.createTimeString(this.startTime);
    }

    setEndTimeAndHours() {
        this.endTime = new Date();
        this.endTimeString = TimeStamp.createTimeString(this.endTime);
        const timeElapsedMilliseconds = this.endTime - this.startTime;
        this.hours = TimeStamp.msToHours(timeElapsedMilliseconds) - 1;
    }

    setBannerDateFormat() {
        const date = new Date();
        const monthNames = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        const daysOfWeek = [
            "Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
        ]

        const day = daysOfWeek[date.getDay()];
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = monthNames[date.getMonth()];//January is 0!
        const yyyy = date.getFullYear();

        this.currDate = `${day} ${dd}-${mm}-${yyyy}`;
    }    
}