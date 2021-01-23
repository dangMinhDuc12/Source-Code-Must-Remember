import '../components/input-wrapper.js';
import {emailValid} from '../ultis.js';
import redirect from '../index.js'


class RegisterScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
            <style>
                .container {
                    height: 100vh;
                }
                #register-form {
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
                <form id = "register-form">
                    <div class="title">
                        Share Story
                    </div>
                    <input-wrapper id = "name"  type="text" placeholder = "Full name" ></input-wrapper>
                    <input-wrapper  id = "email" type="email" placeholder = "Email"></input-wrapper>
                    <input-wrapper id = "password" type="password" placeholder = "Password"></input-wrapper>
                    <input-wrapper id = "confirmPassword" type="password" placeholder = "Confirm Password"></input-wrapper>
                    <button class = "btn" type = "submit">Register</button>
                    <div id = "redirect">Already have an account? Login</div>
                </form>
            </div>
        
        `
        this.shadowDom.getElementById('redirect').onclick = () => {
            redirect('login');
        }



        
        this.shadowDom.getElementById('register-form').onsubmit = (e) => {
            e.preventDefault();
            const email = this.shadowDom.getElementById('email').value;
            const password = this.shadowDom.getElementById('password').value;
            const name = this.shadowDom.getElementById('name').value;
            const confirmPassword = this.shadowDom.getElementById('confirmPassword').value;
            let isValid = true;

        

            

            if(name.trim() === '') {
                this.shadowDom.querySelector('#name').setAttribute('error', 'Please input your name');
                isValid = false;
            }else {
                this.shadowDom.querySelector('#name').setAttribute('error', '');
            }

            
                if(email.trim() === '') {
                    this.shadowDom.querySelector('#email').setAttribute('error', 'Please input your email');
                    isValid = false;
                }else if(!emailValid(email)) {
                    this.shadowDom.querySelector('#email').setAttribute('error', 'Email not valid');
                    isValid = false;
                }else {
                    this.shadowDom.querySelector('#email').setAttribute('error', '');
                }

            
        


            if(password.trim() === '' || confirmPassword.trim() === '') {
                this.shadowDom.querySelector('#password').setAttribute('error', 'please input your password');
                this.shadowDom.querySelector('#confirmPassword').setAttribute('error', 'please input your password');
                isValid = false;
            }else if(confirmPassword.trim() !== password.trim()) {
                this.shadowDom.querySelector('#confirmPassword').setAttribute('error', 'password not match');
                isValid = false;
            }else {
                this.shadowDom.querySelector('#confirmPassword').setAttribute('error', '');
                this.shadowDom.querySelector('#password').setAttribute('error', '');
            }


            if(isValid) {
                auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                    alert(`Bạn đã đăng ký tài khoản thành công với ${res.user.email}`);
                    auth.currentUser.sendEmailVerification();
                    auth.currentUser.updateProfile({
                        displayName: name
                    })
                    redirect('login')
                })
                .catch(err => {
                    alert(err.message);
                })
            }
        
            
        }
    }

    
}

window.customElements.define('register-screen', RegisterScreen);