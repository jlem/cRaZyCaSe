   function crazyfy() {
        var value = document.getElementById('input').value;

        var newValue = value
            .split('')
            .reduce(alternateCase, [])
            .join('');

        document.getElementById('input').value = newValue;
    }

    function alternateCase(accumulator, character, index) {
        var newCharacter = isEven(index) ? character.toUpperCase() : character.toLowerCase();
        accumulator.push(newCharacter);
        return accumulator;
    };

    function isEven(index) {
        return index % 2 == 0;
    }

    function isAlphaNumeric(character) {
        return /[a-zA-z]/.test(character);
    }

