var dialogue = [

    //After Narration
    [``, `WHAT HAPPENED TO YOU?`],
    [`Hey come here... This is... all these things are dangerous. A guy stabbed me on my way back. I think he’s the guy we’re searching for.`, ``],
    [``, `WAIT... YOU SAW HIS FACE?`],
    [`BARELY..`, ``],

    // Cecil shows Ernest the sketch.
    [``, `IS THIS THE GUY?`],
    [`No...he wasn't wearing any mask! who's this?`, ``],
    [``, `AN OLD MAN GAVE THIS. HE’S THE ONLY RELATIVE FOR THAT BOY. AND… THE BOY IS DEAD.`],
    [`AGAIN…! SOMETHING IS DRAGGING US BACK .`, ``],
    [``, `YEAH, I THINK SO. BUT THE THING IS, HE ALSO DIED BECAUSE OF SOME TOXIC MEDICINAL.`],
    [`WE NEED TO GO BACK AND CHECK THE SPOT AGAIN.`, ``],
    [``, `YOU DON’T HAVE TO COME. IT’S TOO DANGEROUS OUT THERE.`],
    [`WHO CARES?`, ``],
    [``, `WHAT? AAH? I DO CARE ABOUT YOU. I WILL GO ALONE AND TRY TO FIND THE NEXT LEAD. TAKE REST . THAT’S THE ONLY THING YOU NEED RIGHT NOW.`],
    [`OH CHICO! HEY I GOT ANOTHER THING TOO `, ``],
    [``, `WHAT?`],
    [`THE OTHER PART OF THAT BOOK COVER.`, ``],
    [``, `WHERE’S IT.. LET ME HAVE A LOOK. IT’S THE SAME. I GOT THE WHOLE BOOK FROM THE KID’S TENT. BUT IT’S ON BRAILLE SCRIPT. I DON’T KNOW HOW TO DECODE IT. SO AT LEAST WE GOT A COMMON CONNECTION I THINK.`],
    [`YEAH… YOU’RE RIGHT. LET ME WORRY ABOUT THIS. I WILL TRY TO DECODE IT.`, ``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``],[``,``]
    // FADE TO: ST MICHAELS PARK
    //Narration
   
];

var left = document.getElementById('left-dialogue');
var right = document.getElementById('right-dialogue');
var content = document.getElementById('scene-script');

var count = -1;

scene = document.getElementById('scene').src;


function display() {


    left.innerHTML = dialogue[count][0].toLowerCase();
    right.innerHTML = dialogue[count][1].toLowerCase();
    document.getElementById('count').innerHTML = count;
    var char2 = document.getElementById('char-2-name');

    if(count >= 28){
        content.innerHTML = `He inspects the book in and out. Who is this guy Aryan? As he rummages
        through the pages, his eye catches the words War and Athena several
        times. To create an empire of goodness, peace and prosperity, you need to
        please the goddess Athena.And inorder to do that you need to make a
        sacrifice of an owl. Reading these disturbs Cecil to the core. Strange
        feeling of his body and soul being separated curbs him.`
        content.style.display = `block`;
        if(count > 31){
            content.style.display = `none`;
        }
        else if(count > 30){
            content.innerHTML = `END OF LEVEL 4 `
            content.style.display = `block`;          
        }
        else if(count > 29){
            content.innerHTML = `He opens the book again,but is disappointed that he isn’t able to read any of
            them.A feeling of adrenaline rush through his body doesn’t make the letters
            clear enough to understand.
            ”JAKE...MAX...HARRY...STEVE...JACKSON...” he then hears a beep sound. The
            very next moment he covers up his eyes and starts screaming aloud. Later
            he falls unconscious.`
            content.style.display = `block`;
        } 
        else if(count >= 28){
            content.innerHTML = `He also gets a visiting card from the place where he got this book from.
            After checking the card he places it into his pocket.
            He then opens the box that contained the medicinal mix. Nothing specific at
            first glance, but the medicines in the box next to it have been misplaced. He
            later smells a few medicinal mixes from the former box.
            `
            content.style.display = `block`;
        }
    }
    else if(count >= 27){
        document.getElementById('scene').style.display = `block`;
        document.getElementById( "test" ).style.display = `none`;

        content.innerHTML = `END OF TASK 6`;
        // document.getElementById('scene').src = 'img/STEMBERG APARTMENT.jpg';
        content.style.display = `block`;
        if(count > 27){
           content.style.display = `none`;
        } 
    }
    else if(count >= 26){ 
        content.style.display = `none`;

        // console.log(document.getElementById('scene').src)

    document.getElementById('scene').style.display = `none`;
    document.getElementById(
        "test"
      ).style.display = `block`;
        
        if(count > 26){
            document.getElementById('scene').style.display = `block`;
             document.getElementById(
                     "test"
             ).style.display = `none`;
    //        content.style.display = `none`;

        } 
    }
    else if(count >= 25){
        document.getElementById('scene').style.display = `block`;
        document.getElementById( "test" ).style.display = `none`;
        content.innerHTML = `TASK 6 : COLLECT THE NEEDY THINGS.`
        content.style.display = `block`;
        document.getElementById('scene').src = 'img/STEMBERG APARTMENT.jpg'
        if(count > 25){
            content.style.display = `none`;
        } 
    }
    else if(count >= 23){
        content.innerHTML = `After that he reached the apartment. It was so quiet there. He enters room
        104. There were no curtains covering the window.`
        content.style.display = `block`;
        document.getElementById('scene').src = 'img/STEMBERG APARTMENT.jpg'
        if(count > 23){
            content.innerHTML = `His eyes fell upon a nearby table piled with books and boxes. He walks
            towards it.`
            content.style.display = `block`;
        }
        else if(count > 24){
            content.style.display = `none`;
        } 
    }
    else if(count >= 22){
        content.innerHTML = `END OF TASK 5`
        content.style.display = `block`;
        document.getElementById('scene').src = 'img/park.jpg'
        if(count > 22){
            content.style.display = `none`;
        } 
    }
    else if(count >= 21){
        document.getElementById('scene').src = 'img/code.jpg';
        content.style.display = `none`;
        if(count > 21){
            content.style.display = `none`;
        } 
    }
    else if(count >= 20){
        content.innerHTML = `TASK 5 : DECODE THE MESSAGE.`
        content.style.display = `block`;
        document.getElementById('scene').src = 'img/park.jpg'
        if(count > 20){
            content.style.display = `none`;
        } 
    }
    else if(count >= 18){
        if(count > 19){
            content.style.display = `none`;
        } 
        else if(count == 19){
        content.innerHTML = `Suddenly he got a message from an unknown number. It was an image.`
        content.style.display = `block`;
        }
        else if(count == 18){
        content.innerHTML = `Cecil analyses the whole place.He couldn't find anything new that could
        help him. As he walks forward he finds a medicine bottle beside a
        bunch.The bottle was found to be that of the Prozac tablets. But it
        contradicts the fact that Jackson died due to the intake of a toxic medicine.`
        content.style.display = `block`;
        document.getElementById('scene').src = 'img/park.jpg';
        }
    }
    else if (count >= 4){
        content.innerHTML = `( Cecil shows Ernest the sketch. )`
        content.style.display = `block`;
        document.getElementById('scene').src = 'img/ernesthouseNew.jpg';
        if(count > 4){
            content.style.display = `none`;
        }   
    }
    else if (count >= -1){
        content.innerHTML = `After the primary analysis of the murder spot he reaches back home.On
        entering the house, he sees Ernest stabbed in his abdomen. Cecil is unable to
        believe what he sees in front of him. Ernest slowly opens his eyes upon
        hearing the noise.`
        content.style.display = `block`;

        if(count > -1){
            content.style.display = `none`;
        }
    }
    else {
        document.getElementById('scene').src = 'img/ernesthouseNew.jpg';
        document.getElementById('right-char').src = 'img/char1.jpg';

    }
}

function fwd() {

    if (count > 31) {

        count = 31;
    
    }

    count = count + 1;
    console.log(count);
    display();

}

function bwd() {

    if (count < -1) {

        count = 0;

    }

    count = count - 1;
    console.log(count);
    display();

}





var nav = document.getElementById('outer-nav');
nav.addEventListener("mouseenter", function () {
    var expand = document.getElementById('nav')
    expand.style.animation = 'navfull 2s forwards';
})
nav.addEventListener("mouseleave", function () {
    var expand = document.getElementById('nav')
    expand.style.animation = 'navsmall 2s forwards';
})