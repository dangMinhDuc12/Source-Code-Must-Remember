class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.type = this.getAttribute('type');
        this.placeholder = this.getAttribute('placeholder');
        this.shadowDom.innerHTML = `
            <style>
                .error {
                    color: red;
                    
                }
            
            </style>



            <div>
                <input type="${this.type}" placeholder = "${this.placeholder}">
                <div class="error"></div>
            </div>
        
        `;

    
    }


    //Đăng ký lắng nghe thay đổi ở những attribute nào , ví dụ dưới là attribute error, hàm dưới return 1 mảng các attribute cần lắng nghe
    static get observedAttributes() {
        return ['error'];
    }


    //Sẽ được gọi khi attribute thay đổi: name là tên attribute muốn lắng nghe sự thay đổi, name ở đây phải được đăng ký với method ở trên
    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'error') {
            this.shadowDom.querySelector('.error').innerText = newValue;
        }

        
        
    }







    get value() {
        return this.shadowDom.querySelector('input').value;
    }
    set value(value) {
        this.shadowDom.querySelector('input').value = value;
    }
}

window.customElements.define('input-wrapper', InputWrapper);