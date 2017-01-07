//jshint esversion:6

var subName = document.getElementById('userInput');
console.log();
document.getElementById('submit').addEventListener('click', subLoader);

function subLoader () {

  let subreddit = subName.value;

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', commentGenerator);
  oReq.open('GET', `https://www.reddit.com/r/${subreddit}.json`);
  oReq.send();


}

function commentGenerator (){
  let objParse = JSON.parse(this.responseText);
  let arrayOfPosts = objParse.data.children;
  
  console.log(arrayOfPosts);

  let response = document.getElementById('response');
  response.innerHTML = 'COMMENT';
}



// module.exports = 'comments';