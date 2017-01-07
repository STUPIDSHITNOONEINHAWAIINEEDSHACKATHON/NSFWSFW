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
  let arrayOfPosts = JSON.parse(this.responseText).data.children;
  for (let i = 0; i < arrayOfPosts.length; i++) {
    let permalink = arrayOfPosts[i].data.permalink;
    console.log(`http://www.reddit.com${permalink}.json`);
  }

  let response = document.getElementById('response');
  response.innerHTML = 'COMMENT';
}



// module.exports = 'comments';