'use strict';

var TWITTER_API_BASE = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php";

var router = new VueRouter({
	routes: [{ path: '', component: HomeComponent }, { path: '/about', component: AboutComponent }, { path: '/tweets', component: TweetFeedComponent }]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		hashtag: "#cats",
		tweets: []
	},
	created: function created() {
		// use created to do initial AJAX lookups
		this.getTweets();
	},
	methods: {
		userChangedHashtag: function userChangedHashtag(enteredHashtag) {
			this.hashtag = enteredHashtag;
			this.getTweets();
		},
		getTweets: function getTweets() {
			var _this = this;

			if (!this.hashtag) {
				this.tweets = [];
				return;
			}
			var uri = TWITTER_API_BASE + '?op=search_tweets&q=' + encodeURIComponent(this.hashtag);
			console.log('getTweets', uri);
			axios.get(uri).then(function (response) {
				console.log(response);
				if (response && response.data && response.data.statuses) {
					_this.tweets = response.data.statuses;
				} else {
					console.warn("Valid response from twitter api/proxy, but bad data");
					_this.tweets = [];
				}
			}).catch(function (error) {
				console.warn(error);
			});
		}
	}
});
//# sourceMappingURL=app.js.map
