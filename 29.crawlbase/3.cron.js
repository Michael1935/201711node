/**
 * Created by wy on 2017/11/12.
 */
var CronJob = require('cron').CronJob;
var job = new CronJob('1-30 * * * * *',function () {
    console.log(new Date().toLocaleString());
});
job.start();