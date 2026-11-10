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
    document.getElementById('cat').src = image;
    document.getElementById('cat').alt = 'A ' + state.toLowerCase() + ' Siamese cat';
}

updateCat();
