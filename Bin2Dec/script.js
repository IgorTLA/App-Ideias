function convert() {
    const bin = document.getElementById('bin').value;

    if (bin === '') return alert('Please, enter a binary number');

    bin.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Enter either 0 or 1')
    });

    const dec = parseInt(bin, 2);
    return document.getElementById('result').value = dec
}

