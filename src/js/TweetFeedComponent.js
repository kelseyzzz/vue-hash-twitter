var TweetFeedComponent = Vue.component("tweet-feed", {
	template: `
		<div class="tweetfeed">
			<hashtag-form @hashtagchanged="userChangedHashtag"></hashtag-form>
			<p> Showing {{hotdog.length}} tweets containing "{{}}" </p>
			<p>Fetching new tweets in 1s</p>
			<ul class="tweets">
				<li v-for="tweet in hotdog">
					{{tweet.text}}
				</li>
			</ul>
		</div>
	`,

	methods: {
		userChangedHashtag: function(enteredHashtag) {
			console.log("userChangedHashtag from TweetFeedComponent", enteredHashtag);

			this.$emit("hashtagchanged", enteredHashtag);
		}
	},
	props:["hotdog"]
})
