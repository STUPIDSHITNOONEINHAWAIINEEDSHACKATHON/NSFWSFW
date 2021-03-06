/*jshint esversion: 6 */
function getPics(sub, callback) {

  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function() {getPics(callback, this.responseText)});
  oReq.open('GET', `https://www.reddit.com/r/${sub}/.json`);
  oReq.send();

  function getPics(callback, responseText){
    var myData = JSON.parse(responseText);
    myData = myData.data.children;
    var picsArray = [];

    for (var i = 0; i < myData.length; i++) {
      if(myData[i].data.url.toString().includes('reddituploads.com')){
        var redditUpLoadsURL = myData[i].data.url.split('amp;').join('');
        // console.log(redditUpLoadsURL);
        picsArray.push(redditUpLoadsURL);
      } else {
        var URL = myData[i].data.url;
        checkLink(URL);
        // picsArray.push(URL);
      }
    }

    function checkLink(URL) {
      let ok = true;
      let addExt = true;
      var blackList = ['imageflake.com', 'gfycat', 'thnk1994.com', 'youtube.com', 'youtu.be', 'docs.google.com', 'flickr', 'instagram', '500px', 'pinkbike', '/a/', '/gallery/', '/r/', 'u733xgniu4jx'];
      var whiteList = ['reddituploads', '.png', '.jpg', '.jpeg', '.gif'];
      whiteList.map(str => {
        if((URL.indexOf(str) > -1)?(true):(false)) {
          addExt = false;
        }
      });
      blackList.map(str => {
        if((URL.indexOf(str) > -1)?(true):(false)) {
          ok = false;
        }
      });
      if(addExt) { URL += '.png'; }
      if(ok) { picsArray.push(URL.split('gifv').join('gif')); }
    }

    callback(picsArray);
  }
}

