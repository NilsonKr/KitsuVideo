// import logo from '../../assets/video.png'

class HeaderComponent extends HTMLElement{
    constructor(){
        super();

        this.attachShadow( { mode : "open"} )
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <header>
                <div class="logo-container">
                    <figure class="logo-header">
                        <img src="./assets/video.png" alt="Logo Header KitsuVideo">
                    </figure>
                    <h2>KitsuVideo</h2>
                </div>
                <div class="user-header">
                    <div class="user-img-container">
                        <img class="user-img" src="./assets/bias.jpg" alt="">
                    </div>
                    <p class="user-name">NilsonKr</p>
                    <span class="user-optlogo"></span>
                    <ul class="user-opt">
                        <li>Item1</li>
                        <li>Item1</li>
                        <li>Item1</li>
                    </ul>
                </div>
            </header>
            ${this.styles()}
        `

        return template
    }
    styles(){
        return ` 
        <style>
            *{
                margin:  0;
                padding: 0;
                box-sizing: border-box;
            }
            :host{
                --logo-font : 'Press Start 2P', cursive;
                --main-font : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                --background-color: mediumslateblue;
                display: block;
                background-color: var(--background-color);
            }
            header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: white;
                padding: 10px 20px;
            }
            .logo-container{
                display: flex;
                align-items: center;
            }
            .logo-header img{ 
                max-width: 55px;
                vertical-align: top;
            }
            .logo-container h2{
                font-size: 2.5rem;
                font-family: var(--logo-font);
            }
            .user-header{
                display: flex;  
                justify-content: space-around;
                align-items: center;
            }
            .user-img-container{
                border-radius: 50%;
                padding: 3px;
                margin-right: 10px;
                background-color: white;
            }
            .user-img{
                margin-right:0 auto ;
                vertical-align: top;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .user-name{
                font-family: var(--main-font);
                font-size: 1.6rem;
                font-weight: bold;
            }
            .user-optlogo{
                display: inline-block;
                width: 15px;
                height: 15px;
                margin-left: 10px;
                background: url('./assets/down-arrow.svg') center / cover no-repeat;
            }
            .user-opt{
                display: none;
            }
        </style>
        `
    }
    render(){
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('header-component', HeaderComponent)