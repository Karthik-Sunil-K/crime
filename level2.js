var dialogue = [

    // .After some time, Jim comes out of the examination room to share theresult with Ernest.
    [`Ernest... This a Kind of Strange...Both of them Are Struck Each Other At The Same Postion`, ``],
    [`The Eighth Cranial Nerve That Connects The Brain And The Ear To be Specific`, ``],
    ['AND I\'m Not Sure Why They Removed The Flesh From The Ear', 'Ahaah!'],
    // scene changes to backyard
    [`IT’S REALLY GROSS , EVEN FOR ME ! I NOTICED BLOOD STAINS FROM THEIR EARS . BUT CAN’T TELL YOU THE EXACT DETAILS`, `WE MUST HAVE MISSED SOMETHING.`],


    ['I GUESS SO...', ''],
    ['', 'JIM.. WHAT ABOUT THAT STAFF??'],

    ['AS PER THE REPORT HE’S A HEART PATIENT. BUT THE CAUSE OF DEATH IS NOT A SUDDEN CARDIAC ARREST', ''],

    ['IT’S AN EXTERNALLY INDUCED TOXIC.GIVE ME SOME TIME . I WILL UPDATE YOU WHEN I GET THE DETAILS', ''],


    // to cecil(cecil and ernest)#9
    [`I THINK WE SHOULD GO BACK AND LOOK FOR THE MISSING LINK. MY GUT
    FEELING SAYS THERE’S SOMETHING AWAITING US!`, `VAMOS!`],
    //#11 crime scene
    [`A PENNY FOR YOUR THOUGHTS`, `JUST BLOWING MY MIND UP . COULD YOU FIND IT FOR ME?`],

    //hint
    [`YEAH SURE`, ``],
    [``, `YOU JUST NEED TO DIG DEEPER. OUR BAD BOY MUST HAVE PUT IT
    SOMEWHERE NOT VISIBLE TO ANY EASY GLANCE. JUST CHECK ALL
    THOSE BOXES`],
    //ernest contd#13
    ['', 'A 19Hz CHIP… AM I OUT OF MIND? LET ME TELL YOU WHAT HAPPENED OVER HERE'],
    ['', 'LAST NIGHT, AFTER THE FIRE ALARM WAS TRIGGERED BY MAX THE THIRD PATIENT LET OTHERS FREE. AT THIS TIME OUR BAD BOY CAME THROUGH THE BACKYARD . HE CUT THE FENCE IN AN IRREGULAR WAY '],
    ['', ' IT STILL NEEDS TO BE CONNECTED . AFTER THAT MAX BRINGS THOSE PATIENTS OVER HERE . EITHER MAX OR HIS BOSS CONTROLLED THIS CHIP THAT WAS ALREADY INSIDE THEIR DAMN HEAD .'],
    ['', ' THIS CHIP EMITS HIGH FREQUENCY WAVES SINCE IT WAS CONNECTED TO THE 8TH CRANIAL NERVE WHICH LEADS TO PHYSICAL INSTABILITY . AND LATER MAYBE IT TRIGGERED THEM SOMEHOW'],
    ['', 'THEN EPIC CLIMAX, ONE HIT… ALL DONE .  AFTER THAT HE BROKE THEIR SKULL AND TRIED TAKING THOSE CHIPS. HE MUST HAVE HIDTHE CHIPS HERE AND SCRAMMED WHEN HE NOTICED  DAVID APPROACHING. '],
    ['', 'SEE.. I HATE THIS WORK… HE’S NOT SYSTEMATIC!'],


    ['YEAH… I AGREE!', ''],

    ['', 'WHAT’S THE OTHER ONE?'],
    ['I THINK IT MUST BE A LEATHER COVER OF SOME BOOK .', 'WHAT’S THE OTHER ONE?'],
    ['', 'LET ME HAVE A LOOK AT IT.'],
    ['', '“CODE OF...” WHATEVER IT IS , A RIPPED BOOK COVER...HAAHAA'],
    ['I THINK IT MIGHT BE USEFUL.', 'SI SI.'],
    //madison enters first person maddison#25
    ['SIR I THINK THERE’S SOMETHING YOU REALLY NEED TO SEE', 'OOH! OKAAY...'],
    //left maddison and right cecil#26
    ['I SAW SOMEONE TRESPASSING THROUGH THE BACKYARD FENCE . HE SEEMS TO BE A BOY. AND...', 'AND WHAT…?'],
    //left madison and right ernest#27
    ['I WILL PLAY THE FOOTAGE', 'OH!...MY...'],
    //cecil and ernest#28
    ['I CAN’T BELIEVE THIS! I FEEL THIS KIND OF DEJAVU.', 'DO YOU KNOW HIM?'],
    ['NO… NEVER MIND.. IT’S MY BRAIN PLAYING TRICKS AGAIN…\nHA..HAA', '']



];
var left = document.getElementById('left-dialogue');
var right = document.getElementById('right-dialogue');
var sceneOuter = document.getElementById('scene-outer');
var count = -1;


function display() {


    if (count == 30) {
        sceneOuter.innerHTML = `
        <div class = 'row mx-auto'>
        <div class = 'col-12 mx-auto'>

        <h4 class = 'text-center text-capitalize'>who it can be ?</h4>
        </div>
        </div>


        <div class = 'row mx-auto'>
        <div class = 'col-12 mx-auto'>

        <span>MAX: <input type="checkbox" name="max" id="max"></span><br>
        <span>DAVID: <input type="checkbox" name="david" id="david"></span><br>
        <span>MADDISON: <input type="checkbox" name="maddison" id="maddison"></span><br>
        <span>RUBBEN: <input type="checkbox" name="rubben" id="rubben" ></span>


        </div>
        </div>`


        var maxDialogue = document.getElementById('max');
        var davidDialogue = document.getElementById('david');
        var madDialogue = document.getElementById('maddison');
        var rubDialogue = document.getElementById('rubben');
        maxDialogue.addEventListener("click", function () {



            sceneOuter.innerHTML = `
    
    <img src="img/asylum.jpg" alt="" class="img-fluid" id="scene">
    <div class="row mx-auto">
      <div class="col-12 mx-auto mt-4 pt-2 text-center">
          <button class='btn' id = 'prev' onclick="bwd()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Prev</button>
          <button class='btn' onclick="fwd()">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
    
    
      </div>
    </div>
    
    `
            count = 32;

        })

        davidDialogue.addEventListener("click", function () {



            sceneOuter.innerHTML = `
        
        <img src="img/asylum.jpg" alt="" class="img-fluid" id="scene">
        <div class="row mx-auto">
          <div class="col-12 mx-auto mt-4 pt-2 text-center">
              <button class='btn'id = 'prev' onclick="bwd()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Prev</button>
              <button class='btn' onclick="fwd()">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        
        
          </div>
        </div>
        
        `
            count = 37;

        })


        madDialogue.addEventListener("click", function () {



            sceneOuter.innerHTML = `
            
            <img src="img/asylum.jpg" alt="" class="img-fluid" id="scene">
            <div class="row mx-auto">
              <div class="col-12 mx-auto mt-4 pt-2 text-center">
                  <button class='btn'id = 'prev' onclick="bwd()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Prev</button>
                  <button class='btn' onclick="fwd()">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            
            
              </div>
            </div>
            
            `
            count = 29;

        })


        rubDialogue.addEventListener("click", function () {



            sceneOuter.innerHTML = `
                
                <img src="img/asylum.jpg" alt="" class="img-fluid" id="scene">
                <div class="row mx-auto">
                  <div class="col-12 mx-auto mt-4 pt-2 text-center">
                      <button class='btn'id = 'prev' onclick="bwd()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Prev</button>
                      <button class='btn' onclick="fwd()">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                
                
                  </div>
                </div>
                
                `
            count = 26;

        })

    }

    left.innerHTML = dialogue[count][0].toLowerCase();
    right.innerHTML = dialogue[count][1].toLowerCase();
    scene = document.getElementById('scene').src;



    if (count >=27) {
        // alert(`count ${count}`)
        document.getElementById('left-char').src = 'img/ernest.jpg'
        document.getElementById('right-char').src = 'img/ernest.jpg'
        document.getElementById('left-char-name').innerHTML = 'CECIL'
        document.getElementById('right-char-name').innerHTML = 'ERNEST'
        document.getElementById(
            "scene-script"
          ).innerHTML = `After he finished his painting he unknowingly glanced up at the CCTV. Both his eyes were a white.`;
        
         
    }

    else if (count >=26) {
        // alert(`count ${count}`)
        document.getElementById('left-char').src = 'img/maddison.jpg'
        document.getElementById('right-char').src = 'img/ernest.jpg'
        document.getElementById('left-char-name').innerHTML = 'MADDISON'
        document.getElementById('right-char-name').innerHTML = 'ERNEST'
        document.getElementById(
            "scene-script"
          ).innerHTML = `Maddison starts to play the footage. A lad enters the asylum through the cut-open fence. He places his foot over one of the foot marks left by the murderer. For a moment it seemed that his walk was unfocused. Then he walks over to the wall of the meditation centre and stares up at it. He takes spray paint from his backpack and paints something on the wall. It was an inverted peace symbol!`;
         
    }


    else if (count >=25) {
        // alert(`count ${count}`)
        document.getElementById('left-char').src = 'img/maddison.jpg'
        document.getElementById('right-char').src = 'img/cecil.jpg'
        document.getElementById('left-char-name').innerHTML = 'MADDISON'
        document.getElementById('right-char-name').innerHTML = 'CECIL'
    }
    else if (count >=24) {
        // alert(`count ${count}`)
        document.getElementById('left-char').src = 'img/maddison.jpg'
        document.getElementById('right-char').src = 'img/ernest.jpg'
        document.getElementById('left-char-name').innerHTML = 'MADDISON'
    }
    else if (count >= 8) {
        
        document.getElementById('left-char').src = 'img/cecil.jpg'
        document.getElementById('right-char').src = 'img/ernest.jpg'
        document.getElementById('left-char-name').innerHTML = 'CECIL'
    }
    else if (count === 2) {
        document.getElementById(
          "scene-script"
        ).innerHTML = `After the preliminary examination of the bodies, they were sent to Dr.Jim for autopsy.
        After some time, Jim comes out of the examination room to share the result with Ernest.`;
       }
    else if (count === 1) {
        document.getElementById(
          "scene-script"
        ).innerHTML = `Dr. Jim’s private autopsy centre . Dr.Jim served in the army for British air force and after his retirement he tied up with private and public agencies for autopsy related consultations.`;
       }
    else if (count >= 0) {
        
        document.getElementById('left-char').src = 'img/doctor.jpg'
        document.getElementById('right-char').src = 'img/ernest.jpg'
        document.getElementById('scene').src = 'img/asylum.jpg';
    }
    else {
        document.getElementById('scene').src = 'img/asylum.jpg';
        // document.getElementById('right-char').src = 'img/char1.jpg';

    }
}
function fwd() {

    count = count + 1;

    display();

}

function bwd() {

    if (count < -1) {

        count = 0;

    }

    count = count - 1;
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
