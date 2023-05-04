import _ from 'underscore';
//Es necesario poner la palabra Export para poder utilizarlo en otro modulo

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<string>} tiposDeCarta Ejemplo :  ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo : ['A','J','Q','K']
 * @returns {Array} Regresa un nuevo Deck de cartas
 */ 

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
