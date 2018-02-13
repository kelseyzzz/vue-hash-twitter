var HashtagFormComponent = Vue.component("hashtag-form", {
    data: function() {
        return {
            enteredHashtag: "",
            
        }
    }, 
  
    template: `
        <div>
            <input v-model="enteredHashtag" @keyup="userChangedHashtag" placeholder="#cats">
        </div>
    `,
   
    methods: {
        userChangedHashtag: function() {
            console.log(this.enteredHashtag,'work bitch');

            if (this.enteredHashtag.length > 3 && this.enteredHashtag != this.$root.hashtagchanged) {
                this.$emit("hashtagchanged", this.enteredHashtag)
            } else {
                this.$emit("hashtagchanged", "")
            }
            
            if ( this.enteredHashtag.length > 0 && this.enteredHashtag[0] != '#') {
                this.enteredHashtag = "#" + this.enteredHashtag;
            }
        }
    },
    props:["hotdog"],
    

   
})
