class shareBluesky extends HTMLElement {
    constructor() {
        super()
    }
    shareToSocial(e) {
        //e.preventDefault();
        //window.alert("clicked!")
        //for purposes of this demo, this link below grabs a codepen I did for this. You'll need to adjust it for your own mark up. Still working on this
        const blueSkyURL = `https://bsky.app/intent/compose?text=I%27m%20sharing%20my%20codepen%20with%20one%20click%20https%3A//codepen.io/AndrewOnTheWeb/pen/yyBXryv`;
        document.getElementById('bluesky-link').href = blueSkyURL;
    }
    connectedCallback() {
        this.innerHTML = `
        <div>
            <p>Hello component</p>
            <a
                id="bluesky-link"
                target="_blank"
                href="#"
                class="shareLink">
            Share to Bluesky</a>
        </div>
        `;
        const link = this.querySelector("#bluesky-link");
        link.addEventListener("click", (e) => this.shareToSocial(e));
    }
}

customElements.define("share-to-bluesky", shareBluesky);