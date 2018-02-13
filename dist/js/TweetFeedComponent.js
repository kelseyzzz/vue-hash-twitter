"use strict";

var TweetFeedComponent = Vue.component("tweet-feed", {
	template: "\n\t\t<div class=\"tweetfeed\">\n\t\t\t<hashtag-form @hashtagchanged=\"userChangedHashtag\"></hashtag-form>\n\t\t\t<p> Showing {{hotdog.length}} tweets containing \"{{}}\" </p>\n\t\t\t<p>Fetching new tweets in 1s</p>\n\t\t\t<ul class=\"tweets\">\n\t\t\t\t<li v-for=\"tweet in hotdog\">\n\t\t\t\t\t{{tweet.text}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t",

	methods: {
		userChangedHashtag: function userChangedHashtag(enteredHashtag) {
			console.log("userChangedHashtag from TweetFeedComponent", enteredHashtag);

			this.$emit("hashtagchanged", enteredHashtag);
		}
	},
	props: ["hotdog"]
});
//# sourceMappingURL=TweetFeedComponent.js.map
