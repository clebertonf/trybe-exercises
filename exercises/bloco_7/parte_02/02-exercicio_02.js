let phraseOrigin = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const bigWord = (phrase) => {
   let treated = phrase.split(' ');
   let bigger = '';
    for(let index =0; index < treated.length; index +=1){
        if (treated[index].length > bigger.length){
            bigger = treated[index];
        }
    }
    console.log(bigger)
}

bigWord(phraseOrigin)