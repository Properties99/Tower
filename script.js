document.getElementById('top').addEventListener('change', function() {
    const top = this.value;
    const bottomSelect = document.getElementById('bottom');
    bottomSelect.disabled = false;

    const bottoms = {
        red_shirt: ['Black Pants', 'White Pants', 'Blue Jeans'],
        blue_shirt: ['Khaki Pants', 'Gray Pants', 'Black Pants'],
        green_shirt: ['Blue Jeans', 'Black Pants', 'White Shorts']
    };

    bottomSelect.innerHTML = '';
    if (bottoms[top]) {
        bottoms[top].forEach(function(bottom) {
            const option = document.createElement('option');
            option.value = bottom.toLowerCase().replace(' ', '_');
            option.textContent = bottom;
            bottomSelect.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '--No suggestions available--';
        bottomSelect.appendChild(option);
    }
});