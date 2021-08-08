document.getElementById("search").addEventListener("click", function () {
	let subreddit = document.getElementById("query").value;
	processURL(`https://www.reddit.com/r/${subreddit}/new.json`);
});

function processURL(url) {
	let request = new XMLHttpRequest();

	request.onload = function () {
		let data = JSON.parse(this.response);
		HTMLifyJSON(data);
	};

	request.open("GET", url, true);
	request.send();
}

function HTMLifyJSON(data) {
	document.getElementById("content").innerHTML = "";

	for (let i = 0; i < 10; i++) {
		let post = data.data.children[i].data;
		document.getElementById("content").innerHTML += `<a href="${post.url}"><b>` + post.title + "</b></a><hr>";
	}
}

// https://www.reddit.com/subreddits/search?q=apple

// let request = new XMLHttpRequest();

// request.onload = function () {
// 	let data = JSON.parse(this.response);
// 	document.getElementById("content").innerHTML = data;
// };

// request.open("GET", `https://www.reddit.com/subreddits/search.json?q=${query}`, true);
// request.send();