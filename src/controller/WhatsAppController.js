class WhatsAppController {

    constructor(){

        this.elementsPrototype()
        
        this.loadElements()
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
        }

        Element.prototype.show = function(){
            this.style.display = 'block'
        }

        Element.prototype.toggle = function(){
            this.style.display = (this.style.display === 'none') ? 'block' : 'none'
        }

        Element.prototype.on = function(eventos, callback){
            //usar o split para separar os espaços que irá gerar um array com os eventos
            eventos.split(' ').forEach( evento =>{

                this.addEventListener(evento, callback)
            })

        }

        Element.prototype.css = function(estilos){

            for(let nome in estilos){

                this.style[nome] = estilos[nome]
            }
        }

        Element.prototype.addClass = function(nome){

        }

    }
}