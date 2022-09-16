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
    const words =textbox1value.split(' ');

    console.log(words.length);

    words.forEach(word => {
        console.log(`${word} (${words.reverse})`);
    });
}