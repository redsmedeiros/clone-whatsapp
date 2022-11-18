

class Format {

    //metodo que não precisa instanciar o obj
    static getCamelCase(text){

        //vai criar uma div no html
        let div = document.createElement('div')

        //criar div com um texto, alterar usando o innerhtml
        div.innerHTML = `<div data-${text}="id"></div>`

        return Object.keys(div.firstChild.dataset)[0] //retornar todas as chaves de um determinado obj - vai na variavel div, no elemento criado

    }
}