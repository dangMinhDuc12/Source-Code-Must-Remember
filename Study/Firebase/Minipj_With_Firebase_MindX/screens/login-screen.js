import '../components/input-wrapper.js'
import './register-screen.js'
import redirect from '../index.js'


class LoginScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
            <style>
                .container {
                    height: 100vh;
                }
                #login-form {
                    text-align: center;
                    width: 40%;
                    margin: auto;
                    height: 100%;
                    background-color: pink;
                    padding-top: 5%;
                }
                .title {
                    font-size: 30px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
            
            </style>
            <div class="container">
                <form id = "login-form">
                    <div class="title">
                        Share Story Login
                    </div>
                    <input-wrapper  id = "email" type="email" placeholder = "Email"></input-wrapper>
                    <input-wrapper id = "password" type="password" placeholder = "Password"></input-wrapper>
                    <button class = "btn">Login</button>
                    <div id = "redirect">Don't have an account? Register</div>
                </form>
            </div>
                    
        
        `
        
        this.shadowDom.getElementById('login-form').onsubmit = (e) => {
            e.preventDefault();
            const email = this.shadowDom.getElementById('email').value;
            const password = this.shadowDom.getElementById('password').value;
            auth.signInWithEmailAndPassword(email, password)
                    .then(res => {
                        alert(`Bạn đã đăng nhập thành công với tài khoản ${res.user.email}`);
                        this.shadowDom.getElementById('email').value = '';
                        this.shadowDom.getElementById('password').value = '';
                        // console.log(res.user);
                        // if(!res.user.emailVerified) {
                        //     alert('Please verify email');
                        //     return
                        // }

                
                        redirect('story');

                    })
                    .catch(err => {
                        alert(err.message);
                    })
                }
        
        this.shadowDom.querySelector('#redirect').onclick = () => {
            redirect('register')
        }


            


    }

    
}

window.customElements.define('login-screen', LoginScreen);