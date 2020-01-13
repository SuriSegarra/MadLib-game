function fillTheBlanks () {


   
    const verb1Input = document.getElementById('verb-1');
    const span1 = document.getElementById('verb-1-span')
    span1.textContent = verb1Input.value;

    const verb2Input = document.getElementById('verb-2');
    const span2 = document.getElementById('verb-2-span')
    span2.textContent = verb2Input.value;

    const drinkInput = document.getElementById('drink');
    const span3 = document.getElementById ('drink-span')
    span3.textContent = drinkInput.value;

    const ingVerb1Input = document.getElementById('ing-verb');
    const span4 = document.getElementById('ing-verb-span');
    span4.textContent = ingVerb1Input.value;


    const ingVerb2Input = document.getElementById('ing-verb2');
    const span5 = document.getElementById('ing-verb2-span');
    span5.textContent = ingVerb2Input.value;

    const bodyPart1Input = document.getElementById('body-part-1');
    const span6 = document.getElementById('body-part-1-span');
    span6.textContent = bodyPart1Input.value;

    const bodyPart2Input = document.getElementById('body-part-2');
    const span7 = document.getElementById('body-part-2-span');
    span7.textContent = bodyPart2Input.value;

    const noun1Input = document.getElementById('noun-1');
    const span8 = document.getElementById('noun-1-span');
    span8.textContent = noun1Input.value;

    const noun2Input = document.getElementById('noun-2');
    const span9 = document.getElementById('noun-2-span');
    span9.textContent = noun2Input.value;

    const animalInput = document.getElementById('animal');
    const span10 = document.getElementById('animal-span');
    span10.textContent = animalInput.value;

    const pluralNoun1Input = document.getElementById('plural-noun-1');
    const span11 = document.getElementById('plural-noun-1-span');
    span11.textContent = pluralNoun1Input.value;

    const pluralNoun2Input = document.getElementById('plural-noun-2');
    const span12 = document.getElementById('plural-noun-2-span');
    span12.textContent = pluralNoun2Input.value;

    const pluralNoun3Input = document.getElementById('plural-noun-3');
    const span13 = document.getElementById('plural-noun-3-span');
    span13.textContent = pluralNoun3Input.value;

    const adj1Input = document.getElementById('adj-1');
    const span14 = document.getElementById('adj-1-span');
    span14.textContent = adj1Input.value;

    const adj2Input = document.getElementById('adj-2');
    const span15 = document.getElementById('adj-2-span');
    span15.textContent = adj2Input.value;

    const adj3Input = document.getElementById('adj-3');
    const span16 = document.getElementById('adj-3-span');
    span16.textContent = adj3Input.value;

    const nameInput = document.getElementById('name');
    const span17 = document.getElementById('name-span');
    span17.textContent = nameInput.value;

    const bodyPart3Input = document.getElementById('body-part-3');
    const span18 =  document.getElementById('body-part-3-span');
    span18.textContent = bodyPart3Input.value;

    const adj4Input = document.getElementById('adj-4');
    const span19 = document.getElementById('adj-4-span');
    span19.textContent = adj4Input.value;

    const placeInput = document.getElementById('place');
    const span20 = document.getElementById('place-span');
    span20.textContent = placeInput.value;

    const wordInput = document.getElementById('word');
    const span21 = document.getElementById('word-span');
    span21.textContent = wordInput.value;

    const emoAdj1Input = document.getElementById('emo-adj1');
    const span22 = document.getElementById('emo-adj1-span');
    span22.textContent = emoAdj1Input.value;

    const bodyPart4Input = document.getElementById('body-part-4');
    const span23 =  document.getElementById('body-part-4-span');
    span23.textContent = bodyPart4Input.value;

    const emoadj2Input = document.getElementById('emo-adj2');
    const span24 = document.getElementById('emo-adj2-span');
    span24.textContent = emoadj2Input.value;
}

const button = document.getElementById ('submit-button');
button.addEventListener('click', fillTheBlanks)

