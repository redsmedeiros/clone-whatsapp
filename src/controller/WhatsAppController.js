class WhatsAppController {

    constructor(){

        this.elementsPrototype()
        this.loadElements()
        this.initEvents()
    }

    initEvents(){

        this.el.myPhoto.on('click', e => {

            this.closeAllleftPanel()

            this.el.panelEditProfile.show()

            setTimeout(()=>{
                this.el.panelEditProfile.addClass('open')
            }, 300)


        })

        this.el.btnNewContact.on('click', e => {

            this.closeAllleftPanel()

            this.el.panelAddContact.show()

            setTimeout(()=>{
                this.el.panelAddContact.addClass('open')
            }, 300)
            
        })

        this.el.btnClosePanelEditProfile.on('click', e =>{

            this.el.panelEditProfile.removeClass('open')

        })

        this.el.btnClosePanelAddContact.on('click', e => {

            this.el.panelAddContact.removeClass('open')
        })

        this.el.photoContainerEditProfile.on('click', e =>{

            this.el.inputProfilePhoto.click()
        })

        this.el.inputNamePanelEditProfile.on('keypress', e =>{

            if(e.key === 'Enter'){

                e.preventDefault()
                this.el.btnSavePanelEditProfile.click()
            }

        })

        this.el.btnSavePanelEditProfile.on('click', e =>{

            console.log(this.el.inputNamePanelEditProfile.innerHTML)
        })

        this.el.formPanelAddContact.on('submit', e => {

            e.preventDefault()

            let formData = new FormData(this.el.formPanelAddContact)
        })

    }

    closeAllleftPanel(){

        this.el.panelAddContact.hide()

        this.el.panelEditProfile.hide()
    }

    loadElements(){

        this.el = {}

        //percorrer todos os ids
        document.querySelectorAll('[id]').forEach( elemento => {

            //no objeto vai criar o indice id e colocar o elemento html
            this.el[Format.getCamelCase(elemento.id)] = elemento

        })
    }

    elementsPrototype(){

        //Element é um elemento HTML - prototype para mexer nessa classe nativa
        Element.prototype.hide = function(){
            //acessa do objeto html o style.display
            this.style.display = 'none'
             //para aninhar metodos
             return this
        }

        Element.prototype.show = function(){
            this.style.display = 'block'
            //para aninhar metodos
            return this
        }

        Element.prototype.toggle = function(){
            this.style.display = (this.style.display === 'none') ? 'block' : 'none'
             //para aninhar metodos
             return this
        }

        Element.prototype.on = function(eventos, callback){
            //usar o split para separar os espaços que irá gerar um array com os eventos
            eventos.split(' ').forEach( evento =>{

                this.addEventListener(evento, callback)
            })
             //para aninhar metodos
             return this

        }

        Element.prototype.css = function(estilos){

            for(let nome in estilos){

                this.style[nome] = estilos[nome]
            }
             //para aninhar metodos
             return this
        }

        Element.prototype.addClass = function(nome){
            this.classList.add(nome)
             //para aninhar metodos
             return this
        }

        Element.prototype.removeClass = function(nome){
            this.classList.remove(nome)
             //para aninhar metodos
             return this
        }

        Element.prototype.toggleClass = function(nome){
            this.classList.toggle(nome)
             //para aninhar metodos
             return this
        }

        Element.prototype.hasClass = function(nome){
            return this.classList.contains(nome)
             //para aninhar metodos
             
        }

        HTMLFormElement.prototype.getForm = function(){

            return new FormData(this)
        }

        HTMLFormElement.prototype.toJSON = function(){

            let json = {}

            this.getForm().forEach( (elemento, key)=> {

                json[key] = elemento
                
            })
        }

    }
}