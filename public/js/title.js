// jshint esversion: 6

function getTitle(data) {

  let titleArr = [];

  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", getData);
  oReq.open("GET", "https://www.reddit.com/r/watchpeopledie/.json");
  oReq.send();

  function getData() {
    let watchPeopleDie = JSON.parse(this.responseText);
    let data = watchPeopleDie.data.children;

    for(let i = 0; i < data.length; i++) {
      let post = data[i].data;

      let title = post.title;
      let author = post.author;
      let upvotes = post.ups;

      titleArr.push({
        "title": title,
        "author": author,
        "upvotes": upvotes
      });
    } 
  }
}

module.exports = getTitle;