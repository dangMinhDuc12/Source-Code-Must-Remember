


class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
        <div>
            <story-header></story-header>
            <create-post></create-post>
            <list-posts></list-posts>
        
        
        </div>
            
        
        `;
        
        
        
    }
}


window.customElements.define('story-screen', StoryScreen);