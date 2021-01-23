class PostItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        
        this.post = {
            dataId : this.getAttribute('data-id'),
            content : this.getAttribute('content'),
            img : this.getAttribute('img')
            
        }


        this.shadowDom.innerHTML = `
        
        <style>
            div {
                border: 1px solid black;
                margin: 20px 0;
                padding: 0 10px;
            }
            img {
                width: 100px;
                height: 100px;
            }
            
        
        </style>


            <div>
            
                <p>${this.post.content}</p>
                <img src = "${this.post.img}" />
                <button >Delete</button>
            
            </div>
        
        
        `;

    
    
        
            this.shadowDom.querySelector('button').onclick = () => {
                let confirmToDelete = confirm('Bạn có chắc chắn muốn xóa')
                if(confirmToDelete) {
                    db.collection('posts').doc(this.post.dataId).delete();
                    alert('Bạn đã xóa bài viết');
                }
            }
            
        
    
    
    }   

        
}


window.customElements.define('post-item', PostItem);