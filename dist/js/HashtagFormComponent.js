"use strict";

var HashtagFormComponent = Vue.component("hashtag-form", {
    data: function data() {
        return {
            enteredHashtag: ""

        };
    },

    template: "\n        <div>\n            <input v-model=\"enteredHashtag\" @keyup=\"userChangedHashtag\" placeholder=\"#cats\">\n        </div>\n    ",

    methods: {
        userChangedHashtag: function userChangedHashtag() {
            console.log(this.enteredHashtag, 'work bitch');

            if (this.enteredHashtag.length > 3 && this.enteredHashtag != this.$root.hashtagchanged) {
                this.$emit("hashtagchanged", this.enteredHashtag);
            } else {
                this.$emit("hashtagchanged", "");
            }

            if (this.enteredHashtag.length > 0 && this.enteredHashtag[0] != '#') {
                this.enteredHashtag = "#" + this.enteredHashtag;
            }
        }
    },
    props: ["hotdog"]

});
//# sourceMappingURL=HashtagFormComponent.js.map
