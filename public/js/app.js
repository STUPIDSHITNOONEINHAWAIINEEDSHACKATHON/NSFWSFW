// const getTitle;
// const getComments;
// const getPics;

let pt = document.getElementById('postTitle');
let pc = document.getElementById('postContent');
let 
document.getElementById('generate').addEventListener('click', fetch);

function fetch() {
	let sub1 = pt.options[pt.selectedIndex].text;
	let sub2 = pc.options[pc.selectedIndex].text;
	getTitle(sub1, function(titleArr) {
		getComments(sub2, function(commentsArr) {
			getPics(sub2, function(picsArr) {
				console.log(titleArr);
				console.log(commentsArr);
				console.log(picsArr);
			});
		});
	});
}