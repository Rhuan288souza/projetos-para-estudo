function convert() {
    const binary = document.getElementById('campoBinario').value;
    if (binary === '') return alert('Por favor digite algum número');
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Formato incorreto');
    });
    const decimal = parseInt(binary, 2);
    document.getElementById('campoDecimal').value = decimal;
    return true;
}
