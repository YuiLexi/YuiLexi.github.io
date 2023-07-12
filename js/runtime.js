function createtime() {
  var initialTime = new Date(2023, 3, 26, 0, 0, 0, 0); //建站时间2023-4-26 00:00:00
  var now = new Date();
  var time = Math.trunc((now.getTime() - initialTime.getTime()) / 1e3); //计算建站时间到现在的秒数
  var seconds = time % 60; //计算秒数
  var minutes = Math.trunc(time / 60) % 60; //计算分钟数
  var hours = Math.trunc(time / 60 / 60) % 24; //计算小时数
  var days = Math.trunc(time / 60 / 60 / 24); //计算天数
  var currentHour = now.getHours(); //获取当前小时数
  var distance = 234e8 + time * 17; //计算旅行者1号距离地球的距离
  var distanceAU = ((234e8 + time * 17) / 1496e5).toFixed(6); //计算旅行者1号距离地球的距离（天文单位）
  distance = distance.toLocaleString(); //格式化旅行者1号距离地球的距离
  var work = "";
  if (currentHour >= 8 && currentHour <= 20) {
    var work = `<img class='boardsign' src='https://imageshack.yuilexi.cn/starryskybird/F小屋.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:16px;font-weight:bold">本站已经运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${distance} 千米，约为 ${distanceAU} 个天文单位 🚀</div>`;
    document.getElementById("workboard").innerHTML = work;
  } else {
    var work = `<img class='boardsign' src='https://imageshack.yuilexi.cn/starryskybird/F小屋.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:16px;font-weight:bold">本站已经运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${distance} 千米，约为 ${distanceAU} 个天文单位 🚀</div>`;
    document.getElementById("workboard").innerHTML = work;
  }
}
setInterval(() => {
  createtime();
}, 1e3);

// var now = new Date();
// function createtime() {}
// function createtime() {
//   now.setTime(now.getTime() + 1e3);
//   var e = new Date("26/04/2023 00:00:00"),
//     t = Math.trunc(234e8 + ((now - e) / 1e3) * 17),
//     a = (t / 1496e5).toFixed(6),
//     o = new Date("26/04/2023 00:00:00"),
//     n = (now - o) / 1e3 / 60 / 60 / 24,
//     r = Math.floor(n),
//     i = (now - o) / 1e3 / 60 / 60 - 24 * r,
//     s = Math.floor(i);
//   1 == String(s).length && (s = "0" + s);
//   var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s,
//     l = Math.floor(d);
//   1 == String(l).length && (l = "0" + l);
//   var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l,
//     b = Math.round(g);
//   1 == String(b).length && (b = "0" + b);
//   let c = "";
//   (c =
//     s < 18 && s >= 9
//       ? `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`
//       : `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`),
//     document.getElementById("workboard") &&
//       (document.getElementById("workboard").innerHTML = c);
// }
// setInterval(() => {
//   createtime();
// }, 1e3);
