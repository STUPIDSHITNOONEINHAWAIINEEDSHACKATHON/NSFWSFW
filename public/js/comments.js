//jshint esversion:6

var subName = document.getElementById('userInput');
console.log();
document.getElementById('submit').addEventListener('click', subLoader);

function subLoader () {

  let subreddit = subName.value;

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', permalinksGenerator);
  oReq.open('GET', `https://www.reddit.com/r/${subreddit}.json`);
  oReq.send();

}

function permalinksGenerator(){
  let permalinksArray = [];
  let arrayOfPosts = JSON.parse(this.responseText).data.children;
  console.log('#1:', JSON.parse(this.responseText));
  for (let i = 0; i < arrayOfPosts.length; i++) {
    let permalink = arrayOfPosts[i].data.permalink;
    let commentsJSON = `http://www.reddit.com${permalink}.json`;
    permalinksArray[i] = commentsJSON;
  }
   
  let randomPermalink = permalinksArray[Math.floor(Math.random() * permalinksArray.length)];
  console.log(randomPermalink);

  var oReq2 = new XMLHttpRequest();
  oReq2.addEventListener('load', commentsGenerator);
  oReq2.open('GET', `${randomPermalink}`);
  oReq2.send();
}

function commentsGenerator(){

  let commentsArray = [];

  let arrayOfComments = JSON.parse(this.responseText)[1].data.children;
  console.log(arrayOfComments);
  
  for (let i = 0; i < arrayOfComments.length; i++){
    commentsArray[i] = arrayOfComments[i].data.body;
  }

  console.log(commentsArray);

  let response = document.getElementById('response');
  response.innerHTML = `${commentsArray}`;
}

// module.exports = 'comments';