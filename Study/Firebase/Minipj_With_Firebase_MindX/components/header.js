
import redirect from '../index.js';


const style = `
    .header {
        display: flex;
        justify-content: space-between;
        height: 64px;
        background-color: pink;
        align-items: center;
        padding: 0 50px;
    }

    .header__right {
        display: flex;
    }
    .header__right-avatar {
        margin-right: 20px;
    }
    .logout {
        cursor:pointer
    }

`





class Header extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open'});
        this.shadowDom.innerHTML = `
            <style>
                ${style}
            
            </style>
        
            <div class="header">
                <div>Logo</div>
                <div class = "header__right">
                    <div class = "header__right-avatar">Avatar</div>
                    <div class = 'logout'>Logout</div>
                </div>
            </div>


            
        
        `
        this.shadowDom.querySelector('.logout').onclick = () => {
            auth.signOut()
                .then(() => {
                    alert('Bạn đã đăng xuất');
                    redirect('login');
                })
        }
    }
    
}


window.customElements.define('story-header', Header);