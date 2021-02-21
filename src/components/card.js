class Card extends HTMLElement{
    constructor(){
        super();

        this.attachShadow( { mode: "open" } )
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = ` 
        <div class="card-container">
            <img src="https://media.kitsu.io/anime/poster_images/41370/small.jpg?1597699092" alt="Landing Image">
            <div class="card-details">
                <img class="playBtn" src="./assets/playBtn.png" alt="Play Button">
                <div class="card-info">
                    <h2>Title</h2>
                    <p class="date">date_placeHolder</p>
                    <em class="episodes">Episodes : 26</em>
                </div>
            </div>
        </div>
        ${this.getStyle()}
        `

        return template
    }
    getStyle(){
        return `
            <style>
                *{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                :host{
                    display: block;
                }
                .card-container{
                    min-height: 300px;
                    max-height: 400px;
                    max-width: 270px;
                    box-shadow: 0 5px 10px rgb(0 0 0 / 80%);
                    overflow: hidden;
                    position: relative;
                    transform-origin: center top;
                    transition: 0.3s;
                    
                }
                .card-container img{
                    object-fit: cover;
                }
                .card-details{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    color: white;
                    position: absolute;
                    top: 0;
                    bottom: -300%;
                    right: 0;
                    left: 0;
                    text-align: center;
                    transition: .7s;
                }
                .card-container:hover{
                    box-shadow: 0 8px 16px 3px rgb(0 0 0 / 60%);
                    transform: translateY(-8px) scale(1.01) rotateX(15deg);
                }
                .card-container:hover .card-details{
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.185);
                }
                .playBtn{
                    width: 100px;
                }
                .card-info h2{
                    font-size: 3rem;
                }
                .date{
                    font-size: 1.3rem;
                    margin: 10px 0;
                }
                .episodes{
                    font-size: 2rem;
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

if(!window.customElements.get('card-anime')){
    customElements.define('card-anime', Card)
}