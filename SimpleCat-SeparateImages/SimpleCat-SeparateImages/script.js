function updateCat(){
    let fullness = Number(document.getElementById('fullness').value);
    let mood = Number(document.getElementById('mood').value);
    let stamina = Number(document.getElementById('stamina').value);

    document.getElementById('fullnessValue').textContent = fullness;
    document.getElementById('moodValue').textContent = mood;
    document.getElementById('staminaValue').textContent = stamina;

    let state = 'Normal';
    let image = 'assets/normal.png';
    if (stamina < 30) {
        state = 'Tired';
        image = 'assets/tired.png';
    } else if (fullness < 30) {
        state = 'Hungry';
        image = 'assets/hungry.png';
    } else if (mood < 30) {
        state = 'Sad';
        image = 'assets/sad.png';
    } else if (mood >= 80) {
        state = 'Happy';
        image = 'assets/happy.png';
    }

    document.getElementById('status').textContent = state;
    let message = '';

     if (state === 'Tired') {
    message = 'Your cat needs some rest!';
    } else if (state === 'Hungry') {
    message = 'Your cat needs food!';
    } else if (state === 'Sad') {
    message = 'Your cat needs some attention!';
    } else if (state === 'Happy') {
    message = 'Your cat is very happy!';
    } else {
    message = 'Your cat is doing fine!';
    }
    const messageElement = document.getElementById('catMessage');

    if (messageElement) {
    messageElement.textContent = message;
    }



if (messageElement) {
    messageElement.textContent = message;
}
    document.getElementById('cat').src = image;
    document.getElementById('cat').alt = 'A ' + state.toLowerCase() + ' Siamese cat';
}

function resetCat() {
    document.getElementById('fullness').value = 50;
    document.getElementById('mood').value = 50;
    document.getElementById('stamina').value = 50;

    updateCat();
}

updateCat();
