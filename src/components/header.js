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
                <figure class="logo-header">
                    <img src="./assets/video.png" alt="Logo Header KitsuVideo">
                </figure>
                <div class="user-header">
                    <img class="user-img" src="" alt="">
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
            :host{
  
            }
            header{
                background-color: mediumpurple;
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