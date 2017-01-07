// jshint esversion: 6

function getTitle(sub) {

  let titleArr = [];

  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", getData);
  oReq.open("GET", `https://www.reddit.com/r/${sub}/.json`);
  oReq.send();

  function getData() {
    let watchPeopleDie = JSON.parse(this.responseText);
    let data = watchPeopleDie.data.children;

    for(let i = 0; i < data.length; i++) {
      let post = data[i].data;

      let title = post.title;
      let author = post.author;
      let upvotes = post.ups;
      let time = post.created_utc;

      titleArr.push({
        "title": title,
        "author": author,
        "upvotes": upvotes,
        "time": calcTimeDiffOf(time)
      });
    } 
  }
}