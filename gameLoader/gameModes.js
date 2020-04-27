function load40LMode(obj) {
    obj.goal = 40;
    obj.cleanInfo = new baseCleanData();
    var date=new Date();
    obj.startTime = obj.endTime = date.getTime();
}