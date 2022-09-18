console.log('I am alive');

function exercise1(){
    var textbox1value = document.getElementById('txt1').value;
    const words = textbox1value.split(' ');
    console.log(words.length);

    words.forEach(word => {
        console.log(`${word} (${word.length})`);
    });

}

function exercise2() {
    var textbox1value = document.getElementById('txt1').value;
    const words = textbox1value.split(' ');
    const reversed = textbox1value.split(' ');

    words.sort((a,b) => b.length - a.length);
    words.forEach(word => {
        console.log(`${word}`);

    });

    reversed.reverse(words);
    
    reversed.forEach(word => {
        console.log(`${word}`);
    });
}

function exercise3() {
    var textbox1value = document.getElementById('txt1').value;
    const words = textbox1value.split(' ');

    var räknare = {};

    words.forEach((word) => {
        (!räknare[word]) ? räknare[word] = 1 : räknare[word]++;
    });

    for (const frequency in räknare) {
        console.log(`${frequency}: ${räknare[frequency]}`);
    }



    /*  for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        if (räknare[word]) {
            räknare[word] +=1;
        } else {
            räknare[word] = 1;
        }
    }
console.log(räknare);
/*    for (const word of words) {
        if (räknare[word]) {
            räknare[word] += 1;
        } else {
            räknare[word] =1;
        }
    }
    console.log(räknare);
*/ } 


function exercise4() {
    var textbox1value = document.getElementById('txt1').value;
    var mellanrum = textbox1value.replace(/\s/g,'');
    const bokstäver = mellanrum.split('');

    var räknare = {};

    bokstäver.forEach((bokstav) => {
        (!räknare[bokstav]) ? räknare[bokstav] = 1 : räknare[bokstav]++;
    });

    for (const frequency in räknare) {
        console.log(`${frequency}: ${räknare [frequency]}`);
    }
}