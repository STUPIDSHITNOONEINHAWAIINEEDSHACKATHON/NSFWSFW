// const getTitle;
// const getComments;
// const getPics;

let pt = document.getElementById('postTitle');
let pc = document.getElementById('postContent');
let pcom = document.getElementById('postComments');
let title = document.getElementById('title');
let author = document.getElementById('author');
let time = document.getElementById('time');
let upvotes = document.getElementById('upvotes');
let comments = document.getElementById('comments');
let pic = document.getElementById('pic');
document.getElementById('generate').addEventListener('click', fetch);

function fetch() {
	let sub1 = pt.options[pt.selectedIndex].text;
	let sub2 = pc.options[pc.selectedIndex].text;
	let sub3 = pcom.options[pcom.selectedIndex].text;
	getTitle(sub1, function(titleArr) {
		getComments(sub3, function(commentsArr) {
			getPics(sub2, function(picsArr) {
				let post = titleArr[Math.floor(Math.random() * titleArr.length)];
				title.innerText = post.title;
				author.innerText = 'by ' + post.author;
				time.innerText = post.time;
				upvotes.innerText = post.upvotes + 'upvotes';
				comments.innerText = commentsArr[Math.floor(Math.random() * commentsArr.length)];
				pic.src = picsArr[Math.floor(Math.random() * picsArr.length)];
			});
		});
	});
}

fetch();