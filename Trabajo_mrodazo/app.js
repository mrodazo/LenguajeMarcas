function updateImg(elementId, size, time = 10000) {
  setInterval(function () {
    var randomImg = document.getElementById(elementId);
    if (randomImg) {
      var timestamp = +new Date();
      randomImg.src = `https://cataas.com/cat?width=${size}&height=${size}&timestamp=${timestamp}`;
    }
  }, time);
}
