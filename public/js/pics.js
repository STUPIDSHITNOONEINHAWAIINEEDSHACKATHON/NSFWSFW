/*jshint esversion: 6 */
function picListener(data) {

  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', getPics);
  oReq.open('GET', 'https://www.reddit.com/r/SFWporn/.json');
  oReq.send();

  function getPics(){
    var myData = JSON.parse(this.responseText);
    myData = myData.data.children;
    var picsArray = [];

    for (var i = 0; i < myData.length; i++) {
      // console.log(myData[i].data.url);
      if(myData[i].data.url.toString().includes('reddituploads.com')){
        // console.log('reddituploads: ', myData[i].data.url);
        var redditUpLoadsURL = myData[i].data.url.split('amp;').join('');
        // console.log(redditUpLoadsURL);
        picsArray.push(redditUpLoadsURL);
      } else {
        var URL = myData[i].data.url;
        // console.log(URL);
        picsArray.push(URL);
      }
    }
    console.log(picsArray);
    console.log(picsArray.length);
  }
}

picListener();

