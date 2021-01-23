import './screens/register-screen.js';
import './screens/login-screen.js';
import './screens/story-screen.js';
import './components/header.js';
import './components/create-posts.js';
import './components/list-posts.js';
import './components/post-item.js'




export default function redirect(screen) {     

    switch (screen) {
        case 'login':
            document.querySelector('#app').innerHTML = `<login-screen></login-screen>`;
            break;
        
        case 'register': 
            document.querySelector('#app').innerHTML = `<register-screen></register-screen>`;

        case 'story':      
        document.querySelector('#app').innerHTML = `<story-screen></story-screen>`;

        default:
            break;
    }
}


auth.onAuthStateChanged((user) => {
    if(user) {
        const userLogin = {
            email: user.email,
            displayName: user.displayName,
            id: user.uid
        }

        window.currentUser = userLogin;
        redirect('story');
    }else {
        redirect('login');
    }
});