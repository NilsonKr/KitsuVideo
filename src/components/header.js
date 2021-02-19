
class HeaderComponent extends HTMLElement{
    constructor(){
        super();

        this.attachShadow( { mode : "open"} )
    }
    static get observedAttributes(){
        return ["src", "title", "uimg", "name"]
    }
    attributeChangedCallback(attr,oldVal,newVal){
        if(oldVal !== newVal){
            this[attr] = newVal
        }
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <header>
                <div class="logo-container">
                    <figure class="logo-header">
                        <img src=${this.src} alt="Logo Header KitsuVideo">
                    </figure>
                    <h2>${this.title}</h2>
                </div>
                <div class="user-header">
                    <div class="user-img-container">
                        <img class="user-img" src=${this.uimg} alt="">
                    </div>
                    <p class="user-name">${this.name}</p>
                    <span class="user-optlogo"></span>
                    <div class="user-opt">
                        <ul>
                            <li>Item1</li>
                            <li>Item1</li>
                            <li>Item1</li>
                        </ul>
                    </div>
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
                justify-content:center;
                align-items: center;
                flex-wrap: wrap;
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
                font-size: 2.4rem;
                font-family: var(--logo-font);
            }
            .user-header{
                position: relative;
                height: 100%;
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
                position: absolute;
                display: none;
                width: 100%;
                bottom: -240%;
                right: 0;
                padding: 5px;
                text-align: right;
                font-size: 2rem;
                font-weight: bold;
                border-radius: 15px;
                background-color: var(--background-color);
            }
            .user-opt ul{
                list-style: none;
            }
            .user-opt li {
                margin: 5px;
                text-decoration: underline;
            }
            .user-header:hover .user-opt{
                display: block;

            }
            @media screen and (min-width: 768px){
                header{
                    justify-content: space-between;
                }
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

 if(!window.customElements.get('header-component')){
    customElements.define('header-component', HeaderComponent)
}
