var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">
			<h1>Welcome</h1>
			<p>Enter a hashtag to see an auto-updating feed of tweets about it.</p>
			<router-link to="/tweets" class="nav" > Got it. </router-link>
			<router-link to="/about" class="nav" > Huh? </router-link>
		</div>
	`,
})
