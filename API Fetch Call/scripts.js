class fetchData extends HTMLElement {
    constructor() {
        super();
    }
    static get observedAttributes() {
        return ['platformId', 'profileId'];
    }

    connectedCallback() {
        const platformId = this.getAttribute('platformId');
        const profileId = this.getAttribute('profileId');
        const fetchData = async() => {
            const url = `https://www.bungie.net/Platform/Destiny2/${platformId}/Profile/${profileId}/?components=100,200,1400,202`;
            const getData = await fetch(url, {
                headers: {
                    'x-api-key': ThisIsWhereYourAPIKeyWouldGo
                }
            })
            getData.json().then(json => {
              this.renderData(json.Response);
            });
          }
          fetchData();
    }
    renderData(data) {
        var lastPlayedDate = data.profile.data.dateLastPlayed
        this.innerHTML = `
        <div>
            <p>Last played: ${lastPlayedDate}</p>
        </div>
        `
    }
}

customElements.define("fetch-destiny2-profile", fetchData);