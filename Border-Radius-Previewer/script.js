let box = document.querySelector('#box'),
    inputs = document.querySelectorAll('.allInputs'),
    dataBorderRadius = {
        'topLeft': 0,
        'topRight': 0,
        'bottomRight': 0,
        'bottomLeft': 0
    };

inputs.forEach((input) => {
    input.addEventListener('change', function () {
        let border = this.getAttribute('border'),
            value = this.value + 'px';

        dataBorderRadius[border] = value;
        draw();
    });
});

function draw() {
    let radiusValues = `${dataBorderRadius.topLeft} ${dataBorderRadius.topRight} ${dataBorderRadius.bottomRight} ${dataBorderRadius.bottomLeft}`;

    box.style.borderRadius = radiusValues;

    document.getElementById('code').value = `border-radius: ${radiusValues};`;
}

function copy() {
    let copyText = document.getElementById('code');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
