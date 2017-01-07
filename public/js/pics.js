/*jshint esversion: 6 */

function picListener() {

  var myData = JSON.parse(this.responseText);
  myData = myData.data.children;


}

let oReq = new XMLHttpRequest();
oReq.addEventListener('load', picListener);
oReq.open('GET', 'https://www.reddit.com/r/SFWporn/.json');
oReq.send();