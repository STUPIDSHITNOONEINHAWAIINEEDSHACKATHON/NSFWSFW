//jshint esversion:6

function getComments(subName, callback) {

function subLoader(subName, callback) {

  let subreddit = subName;

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function() {permalinksGenerator(callback, this.responseText)});
  oReq.open('GET', `https://www.reddit.com/r/${subreddit}.json`);
  oReq.send();

}

function permalinksGenerator(callback, responseText){
  let permalinksArray = [];
  let arrayOfPosts = JSON.parse(responseText).data.children;
  for (let i = 0; i < arrayOfPosts.length; i++) {
    let permalink = arrayOfPosts[i].data.permalink;
    let commentsJSON = `http://www.reddit.com${permalink}.json`;
    permalinksArray[i] = commentsJSON;
  }
   
  let randomPermalink = permalinksArray[Math.floor(Math.random() * permalinksArray.length)];

  var oReq2 = new XMLHttpRequest();
  oReq2.addEventListener('load', function() {commentsGenerator(callback, this.responseText)});
  oReq2.open('GET', `${randomPermalink}`);
  oReq2.send();
}

function commentsGenerator(callback, responseText){

  let commentsArray = [];

  let arrayOfComments = JSON.parse(responseText)[1].data.children;
  
  for (let i = 0; i < arrayOfComments.length; i++){
    commentsArray[i] = arrayOfComments[i].data.body;
  }
  callback(commentsArray);
}

subLoader(subName, callback);

}

// module.exports = 'comments';