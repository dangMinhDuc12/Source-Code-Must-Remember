class ListPosts extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        db.collection('posts').onSnapshot(res => {
            let postItem = res.docs.map(doc => {
                
                return (`
        
                <post-item data-id='${doc.id}' content = '${doc.data().content}' img = '${doc.data().img}'></post-item>
        
        
        `)
            }
        
            );

            this.shadowDom.innerHTML = `
                <div>
                    ${postItem.join('')}
                </div>
            
            `

        })
        
    }

}



window.customElements.define('list-posts', ListPosts);