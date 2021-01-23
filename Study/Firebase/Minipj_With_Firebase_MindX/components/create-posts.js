import {uploadFile} from '../ultis.js'



const style = `
<style>
.create__post{
    height: 70vh;
    width: 70vh;
    background-color: aquamarine;
    margin: 0 auto;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    /* align-items: c; */


}
.content{
    display: flex;
    justify-content: center;
}
.content textarea{
    min-width: 80%;
    max-width: 90%;
    margin: 20px;
    
}
.button{
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.button button{
    padding: 10px;
    border: none;
    outline: none;
    background-color: blueviolet;
    color: white;

}
</style>


`;




class CreatePosts extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `

        ${style}


    <div class="create__post">
        <div class="content">
            <textarea class = "content-input" name="" id="text"></textarea>
        </div>
        <div class="button">
            <input type="file" name="" id="file">
            <button class = "button-post">Post</button>
        </div>
    </div>

        
        
        `;
        this.shadowDom.querySelector('.button-post').onclick = async () => {
        
            const file = this.shadowDom.getElementById("file");
            const content = this.shadowDom.querySelector('.content-input').value;
            if(content.trim() && file.files.length) {
                let docRef = await db.collection('posts').add({
                    content
                    
                });
                alert('Bạn đã tải lên thành công');
                this.shadowDom.querySelector('#text').value = '';
                await db.collection('posts').doc(docRef.id).update({
                    img: await uploadFile(file.files[0])
                });
                file.value = '';
                
            }else {
                alert('Bài viết không có ảnh hoặc bạn chưa nhập gì');
            }
        
        }

    
    
    }
}

window.customElements.define('create-post', CreatePosts);