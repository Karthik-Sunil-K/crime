var dialogue = [
  //dialogue of cecil to ernest
  [
    `WHAT DOES THIS SYMBOL REALLY MEAN?`,
    `A INVERTED PEACE SYMBOL… SO MUCH TO CLARIFY SOMETHING REBELLIOUS`,
  ],
  [
    `THAT KID MUST BE TRAINED REALLY WELL FOR THIS. BUT DO YOU THINK
THIS IS A TRAP OR A DIVERSION?`,
    `IT CAN BE ANYTHING BUT RIGHT NOW WE DON’T HAVE TO FIGURE IT OUT,
WE HAVE TO FOLLOW HIM IMMEDIATELY`,
  ],
  [
    `AGREE..`,
    `I SHOULD REALLY TAKE THIS CHIP TO DR.JIM. SO YOU DO ONE THING . I
WILL INFORM REED AND HE WILL GIVE YOU THE INFORMATION ABOUT
THIS KID . BRING THIS DRIVE TO HIM.
`,
  ],
  [
    `SURE.. AND YOU SHOULD COLLECT THE SAMPLE DETAILS OF THAT TOXIC
MIX . THERE MIGHT BE MORE OF THEM .`,
    ``,
  ],
  [`SO ALL CLEAR?`, `YEAH.`],

  //SCENE CHANGE TO LAKE TOWER POLICE STATION
  //    Cecil to Reed Dialogues
  [
    `REED, WE NEED TO FIND OUT WHO THE KID IS. I THINK HE MIGHT BE IN
SOME CRIMINAL DATABASE.`,
    `LET ME PASS THIS TO CYBER COUNCIL.`,
  ],
  //Reed to Cecil
  [
    `SOO… HOW ARE THINGS GOING?`,
    `EACH DAY THINGS ARE GETTING COMPLICATED. AT FIRST THINGS WERE
KIND OF EASY, BUT NOW LEADS ARE COMING OUT OF NOWHERE`,
  ],
  [
    `I KNOW… SOMETIMES THINGS ARE LIKE THIS. 2 YEARS AGO I ASSISTED
OUR DEPUTY IN JAKE RUDOLF’S MURDER CASE . AND IT WAS KIND OF THE
SAME THING . THINGS JUST POP OUT FROM NOWHERE. STILL REMAINS
UNSOLVED.
`,
    ``,
  ],
  [
    `HEY… WE GOT THE KID. IT’S JONATHAN HUFF. AGE 18. HE WAS NOT
INVOLVED IN ANY CRIME, THOUGH HE WAS SAID TO BE INVOLVED IN SOME
KIND OF SECRET GROUP`,
    `SECRET GROUP… ARE YOU SERIOUS? A BLIND KID…?`,
  ],
  [
    `AAAH...YEAH!`,
    `NEVERMIND, MY BAD… MAYBE HE SHOULD HAVE SOME SPECIAL
POTENTIAL. SO WHAT’S THIS GROUP CALLED?`,
  ],
  [
    `THERE’S NO RECORD ON THAT. THE PUBLIC SAYS IT’S A REBELLIOUS
GROUP, AND THEIR NAME IS IN ENOCHIAN, SOME SAYS IT’S GREEK.
`,
    `ENOCHIAN… YOU MEAN THE LANGUAGE OF ANGELS… MAAHN RUMOURS
ARE ALWAYS FIRE. GREEK MAKES SENSE. SO… WHERE DO WE FIND THIS
BOY?`,
  ],
  [`AAH, HE’S A STREET KID. YOU WILL FIND HIM THERE.`, `ROGER THAT!`],
  //Reed to Old man
  [
    `HEY… YOU KNOW HIM??`,
    `WHAT.. I KNOW HIM. YOU’RE HERE FOR HIS MAJESTYYY…? HAIL MY BOY.
`,
  ],
  //CECIL TO REED
  [
    `HEY REED, I THINK HE’S HIGH.`,
    `RIGHT…. PLEASE LOOK AFTER HIM, I WILL BRING SOME WATER.`,
  ],
  //TASK 4
  //Old man to Reed and cecil
  //Old man to reed
  [
    `
`,
    ``,
  ],
  [``,``],
  [
    `WHO THE HELL ARE YOU GUYS?
`,
    ``,
  ],
  //OLD man to cecil
  [
    `AAH.. SCREW ME!`,
    `HEY… WE ARE NOT HERE FOR YOU. JUST TELL US ABOUT JONATHAN`,
  ],
  [
    `IS HE IN TROUBLE?`,
    `NOT YET. BUT IF YOU DON’T COOPERATE, THEN HE MIGHT BE IN TROUBLE.`,
  ],
  [
    `HE’S BEEN WITH ME FOR THE PAST 4 YEARS. HE’S BLIND BY BIRTH. HIS
FATHER WAS MY CLOSE FRIEND. AFTER HE DIED I TOOK CARE OF HIM.
HE’S BLIND , BUT HE’S GOT OTHER SHARP SENSES. 2 YEARS AGO A GUY
CAME HERE TO TALK TO ME AND JONATHAN AND HE SAID HE WANTS HIM
IN HIS TEAM.`,
    `YOU MEAN TEAM,TEAM?
`,
  ],
  //Old man to reed
  [
    `YEAH.. I’M NOT SURE. THEN THESE GUYS RUMORED THAT HE WAS A PART
OF SOME SECRET SOCIETY KINDA SHIT.`,
    `DO YOU REMEMBER HIS FACE? WOULD YOU RECOGNISE HIM AGAIN?`,
  ],
  [`HERE, I SCRIBBLED THIS THE DAY I MET HIM`, `WHERE IS HE NOW?`],
  //Old man to cecil
  [
    `I DON’T KNOW… BUT HE ALWAYS STICKS A NOTE IN THE TENT. I USUALLY
DON’T CHECK IT. FIND IT IF YOU CAN. THERE WILL BE MORE OF THEM.
`,
    `REED, I ALREADY GOT IT. HE WENT TO THE PARK.`,
  ],
  //Reed to Cecil
  [`SO.. WHAT ARE WE WAITING FOR?`, `I GOT ONE MORE THING TO DO`],
  //Old man to cecil
  [`YOU TOUCHED HIS STUFFS?`, `WHY? DID HE CAST SOME SPELLS IN IT?`],
  //Reed to Cecil
  [
    `WHAT ABOUT THE AUTHOR?`,
    `ONE MR.ARYAN.. “CODE OF REBEL” THAT’S THE NAME… BUT I CAN’T
DECODE THE CONTENT.`,
  ],
  [
    `WE SHOULD TAKE THIS TO ERNEST.
`,
    `AGREED.`,
  ],
];
var count = 10;


var left = document.getElementById("left-dialogue");
var right = document.getElementById("right-dialogue");
//var left_char_img = document.getElementById('left-char').src
//var right_char_img = document.getElementById("right-char").src;

//var left_caption = document.getElementById('left-caption').innerHTML
//var right_caption = document.getElementById('right-caption').innerHTML


function display() {
  left.innerHTML = dialogue[count][0].toLowerCase();
  right.innerHTML = dialogue[count][1].toLowerCase();
  document.getElementById("count").innerHTML = count;
  var content = document.getElementById("scene-script");
  var char2 = document.getElementById("char-2-name");


  document.getElementById("scene-script").style.opacity = 0;

  if (count == 0) {
  document.getElementById("scene-script").style.opacity = 1;
    document.getElementById(
      "scene-script"
    ).innerHTML = `They play the video footage again and again. They ask for a copy of the
footage from Maddison.`;
    document.getElementById("left-char").src = "./img/cecil.jpg";
    document.getElementById("left-caption").innerHTML = "CECIL";
    document.getElementById("right-char").src = "img/ernest.jpg";
    document.getElementById("right-caption").innerHTML = "ERNEST";
  } else if (count == 4) {
  document.getElementById("scene-script").style.opacity = 1;

    document.getElementById(
      "scene-script"
    ).innerHTML = `Ernest heads over to Dr.Jim while Cecil meets up with Reed.`;
    document.getElementById("left-char").src = "./img/ernest.jpg";
    document.getElementById("left-caption").innerHTML = "ERNEST";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "CECIL";
  } else if (count == 5) {
  document.getElementById("scene-script").style.opacity = 1;

    document.getElementById(
      "scene-script"
    ).innerHTML = `Cecil hands over the footage to Reed.`;
    
    document.getElementById("scene").src = "img/policestation.jpg";
    document.getElementById("left-char").src = "./img/cecil.jpg";
    document.getElementById("left-caption").innerHTML = "CECIL";
    document.getElementById("right-char").src = "img/reed.jpg";
    document.getElementById("right-caption").innerHTML = "AGENT REED";
  } else if (count == 6) {
  document.getElementById("scene-script").style.opacity = 1;

    document.getElementById(
      "scene-script"
    ).innerHTML = `Reed forwards the video to the cyber council. Later`;
    
    document.getElementById("left-char").src = "./img/reed.jpg";
    document.getElementById("left-caption").innerHTML = "Reed";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "CECIL";
  }
  else if (count == 8) {
  document.getElementById("scene-script").style.opacity = 1;

   document.getElementById(
     "scene-script"
   ).innerHTML = `Reed gets a call over his phone. After the call.`;
  } else if (count == 12) {
  document.getElementById("scene-script").style.opacity = 1;

    document.getElementById(
      "scene-script"
    ).innerHTML = `Reed and Cecil hunt for Jackson. After some time they find a guy who knows Jackson.`;
    document.getElementById("scene").src = "img/street.jpg";
    document.getElementById("left-char").src = "./img/reed.jpg";
    document.getElementById("left-caption").innerHTML = "AGENT REED";
    document.getElementById("right-char").src = "img/oldman.jpg";
    document.getElementById("right-caption").innerHTML = "OLD MAN";
  } else if (count == 13) {
    document.getElementById("left-char").src = "./img/cecil.jpg";
    document.getElementById("left-caption").innerHTML = "CECIL";
    document.getElementById("right-char").src = "img/reed.jpg";
    document.getElementById("right-caption").innerHTML = "AGENT REED";
  } else if (count == 14) {
  document.getElementById("scene-script").style.opacity = 1;

    document.getElementById(
      "scene-script"
    ).innerHTML = `Reed goes to get water for the old man. Cecil walks forward. At the side he
spots a tent made of old sheets. He grabs a torch and enters the tent. He
caught sight of some sticky notes and old newspaper cuttings in the tent
`;
    document.getElementById("left-char").src = "./img/cecil.jpg";
    document.getElementById("left-caption").innerHTML = "AGENT REED";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "AGENT REED";
  }
    // adding task 4
  else if (count == 15) {
    document.getElementById(
      "scene-outer"
    ).innerHTML = `<div class="row mx-auto">
                                                        <div class="col-12 mx-auto mt-4 pt-2 text-center">
                                                          <div id="hoverChange">
                                                            <div class="evidence mb-3">
                                                              <img src="./img/Level3 hover3.png" alt="book" srcset="">
                                                            </div>
                                                          </div>
                                                          <button class='btn' id = 'prev' onclick="bwd()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Prev</button>
                                                          <button class='btn' id = 'next' onclick="fwd()">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                                                        </div>
                                                      </div>`;
  }
    
  else if (count == 16) {
   
    document.getElementById("scene-script").style.opacity = 1;

    document.getElementById('scene-script').innerHTML = `Reed gets a can of water and pour it on the head of the old guy.`;
    document.getElementById("left-char").src = "./img/oldman.jpg";
    document.getElementById("left-caption").innerHTML = "OLDMAN";
    document.getElementById("right-char").src = "img/reed.jpg";
    document.getElementById("right-caption").innerHTML = "AGENT REED";
  }
  else if (count == 17) {
    document.getElementById(
      "scene-script"
    ).innerHTML = `Reed shows him his card.`;
    document.getElementById("left-char").src = "./img/oldman.jpg";
    document.getElementById("left-caption").innerHTML = "OLDMAN";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "CECIL";
  }
  else if (count == 20) {
    document.getElementById("scene").src = "./img/street.jpg";
    document.getElementById("left-char").src = "./img/oldman.jpg";
    document.getElementById("left-caption").innerHTML = "OLDMAN";
    document.getElementById("right-char").src = "img/reed.jpg";
    document.getElementById("right-caption").innerHTML = "REED";
    document.getElementById("scene").style.height = "100%";
    document.getElementById("scene").style.width = "100%";
    document.getElementById("scene").style.marginLeft = "0%";

  } else if (count == 21) {
    //document.getElementById("scene-outer").style.display = block;
    //document.getElementById("scene-outer").style.textAlign = center;
    document.getElementById("scene").style.marginLeft = '25%';
    document.getElementById("scene").style.height = '50%';
    document.getElementById("scene").style.width = '50%';
  
    document.getElementById("scene").src = "./img/scribblle.gif";

  } else if (count == 22) {
    document.getElementById("scene").style.marginLeft = "0%";

    document.getElementById("scene").style.height = "100%";
    document.getElementById("scene").style.width = "100%";
    document.getElementById("scene").src = "img/street.jpg";
    document.getElementById("left-char").src = "./img/oldman.jpg";
    document.getElementById("left-caption").innerHTML = "OLDMAN";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "CECIL";
  } else if (count == 23) {
    document.getElementById("left-char").src = "./img/reed.jpg";
    document.getElementById("left-caption").innerHTML = "AGENT REED";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "CECIL";
  } else if (count == 24) {
    document.getElementById("scene-script").style.opacity = 1;

    document.getElementById(
      "scene-script"
    ).innerHTML = `Cecil shows the book to Reed.... Cecil and Reed smiles/smirks at the old man.`;
    document.getElementById("left-char").src = "./img/oldman.jpg";
    document.getElementById("left-caption").innerHTML = "OLDMAN";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "CECIL";
  } else if (count == 25) {
    document.getElementById("left-char").src = "./img/reed.jpg";
    document.getElementById("left-caption").innerHTML = "AGENT REED";
    document.getElementById("right-char").src = "img/cecil.jpg";
    document.getElementById("right-caption").innerHTML = "CECIL";
  } else if (count == 26) {
    document.getElementById("scene-script").style.opacity = 1;

    document.getElementById(
      "scene-script"
    ).innerHTML = `They head over to St. Michaels Park, the place mentioned in the sticky note.
They arrive at the destination. On arriving they notice people crowded at the
park. Reed and Cecil walk over to the spot. They see the dead body of
Jackson!`;
  }
}

function fwd() {
  console.log(count);
  count = count + 1;
  if (count == 16) {
     document.getElementById(
       "scene-outer"
     ).innerHTML = `<img src="img/street.jpg" alt="" class="img-fluid" id="scene">
                    <div id="scene-script" class = 'text-transform mx-auto'>hello this is nyc</div>
        <div class="row mx-auto">
          <div class="col-12 mx-auto mt-4 pt-2 text-center">
              <button class='btn' id = 'prev' onclick="bwd();"><i class="fa fa-arrow-left" aria-hidden="true"></i> Prev</button>
              <button class='btn' onclick="fwd();">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        
        
          </div>
        </div>`;
  }
  display();
}

function bwd() {
    if (count < -1) {
        count = 0;
    }
  count = count - 1;
  if (count == 14) {
    document.getElementById(
      "scene-outer"
    ).innerHTML = `<img src="img/street.jpg" alt="" class="img-fluid" id="scene">
                    <div id="scene-script" class = 'text-transform mx-auto'>hello this is nyc</div>
                      <div class="row mx-auto">
                        <div class="col-12 mx-auto mt-4 pt-2 text-center">
                          <button class='btn' id = 'prev' onclick="bwd();"><i class="fa fa-arrow-left" aria-hidden="true"></i> Prev</button>
                            <button class='btn' onclick="fwd();">Next <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                          </div>
                      </div>`;
  }
    display();
}

var nav = document.getElementById("outer-nav");
nav.addEventListener("mouseenter", function () {
  var expand = document.getElementById("nav");
  expand.style.animation = "navfull 2s forwards";
});
nav.addEventListener("mouseleave", function () {
  var expand = document.getElementById("nav");
  expand.style.animation = "navsmall 2s forwards";
});