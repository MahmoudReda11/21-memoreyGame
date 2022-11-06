document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("Whats Your Name?");
    if (yourName == null || yourName == ""){
        document.querySelector(".name span").innerHTML = 'UnKnow';

    } else {
        document.querySelector(".name span").innerHTML = yourName;

        


    }
    document.querySelector(".control-buttons").remove();
    document.getElementById('musicbg').play();

}

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = Array.from(Array(blocks.length).keys());


shuffle(orderRange);


//add order css property to game blocks

blocks.forEach((block, index) => {

    block.style.order = orderRange[index];

    //add click event
    block.addEventListener('click', function () {

        flipBlock(block);
    })
    
});


function flipBlock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));

    if (allFlippedBlocks.length === 2) {

        stopClicking();

        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

    }


}

//stop clicking function

function stopClicking() {

    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {

        //remove class no clicking afre the time= duration

    blocksContainer.classList.remove('no-clicking');


    }, 500);

}

function checkMatchedBlocks(fristBlock, secondBlock) {


    let triesElement = document.querySelector('.tries span');

    if (fristBlock.dataset.technology === secondBlock.dataset.technology) {
        fristBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        fristBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');


        document.getElementById('success').play();
        

    } else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {
            fristBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        }, 500)

        document.getElementById('mrbbl').play();
    }
}





function shuffle(array){

    let current = array.length,
    temp,
    random;

    while (current > 0) {

        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;
    }

    return array;

}

