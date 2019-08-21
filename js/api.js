const baseURL = 'https://www.amiiboapi.com/api/amiibo/'

const list = document.querySelector('ul');
const submitbtn = document.querySelector('#submit');

fetch(baseURL,
     {
        method: "GET",
       } 
    )
    .then(results => {
        console.log(results);
        return results.json();
    })
    .then(json => {
        console.log(json);
        marioBros(json.amiibo);
        smashBros(json.amiibo);
        legendZ(json.amiibo);
        pokemon(json.amiibo);
        animalC(json.amiibo);
        splatoon(json.amiibo);
        monster(json.amiibo);
        moreMario(json.amiibo);
        classics(json.amiibo);
        other(json.amiibo);
    })



/**********SIDE DISPLAY******************* */
const sideDis = document.querySelector('#container');

submitbtn.addEventListener('click', fetchSpace);

function fetchSpace(a) {
    a.preventDefault();
    fetch(baseURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            randomizer(json.amiibo);

        })
}

function randomizer(amii) {
    let randomNum = Math.floor(Math.random() * amii.length);
    while (sideDis.firstChild) {
        sideDis.removeChild(sideDis.firstChild);
    }
    let char = document.createElement('h5');
    let image = document.createElement('img');
    let name = document.createElement('p');
    let gameS = document.createElement('p');

    char.innerText = amii[randomNum].character;
    image.src = amii[randomNum].image;
    name.innerText = amii[randomNum].name;
    gameS.innerText = amii[randomNum].gameSeries;

    sideDis.appendChild(char);
    sideDis.appendChild(image);
    sideDis.appendChild(name);
    sideDis.appendChild(gameS);

}

/**********MAIN DISPLAY********************** */


//super mario bros
//carousel
var slideSMBIndex = 1;
showSMBSlide(slideSMBIndex);
// Next/previous controls
function plusSMBSlides(n) {
  showSMBSlide(slideSMBIndex += n);
}
// Thumbnail image controls
function currentSMBSlides(n) {
  showSMBSlide(slideSMBIndex = n);
}
function showSMBSlide(n) {
  let i;
  let slidesSMB = document.getElementsByClassName("mySuperMB");
  if (n > slidesSMB.length) {slideSMBIndex = 1} 
  if (n < 1) {slideSMBIndex = slidesSMB.length}
  for (i = 0; i < slidesSMB.length; i++) {
      slidesSMB[i].style.display = "none"; 
  }
  slidesSMB[slideSMBIndex-1].style.display = "block"; 
}

function marioBros(marioBro) {
    
    let carouselInner = document.querySelector('.superMB');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Super Mario Bros.') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h2');
            let gameS = document.createElement('h4');
            let release = document.createElement('h6');
            let na = document.createElement('p');
            let eu = document.createElement('p');
            let jp = document.createElement('p');
            let au = document.createElement('p');

            ncarStandard.className = 'mySuperMB slides';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;
            release.innerText = 'Release Dates: ';
            na.innerText = k.release.na;
            eu.innerText = k.release.eu;
            jp.innerText = k.release.jp;
            au.innerText= k.release.au;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);
            ncarStandard.appendChild(release);
            ncarStandard.appendChild(na);
            ncarStandard.appendChild(eu);
            ncarStandard.appendChild(jp);
            ncarStandard.appendChild(au);


        } else {
            
            //console.log('not SMB');
        }

    })
}



//super smash bros
//carousel
var slideSSBIndex = 1;
showSSBSlide(slideSSBIndex);
// Next/previous controls
function plusSSBSlides(n) {
  showSSBSlide(slideSSBIndex += n);
}
// Thumbnail image controls
function currentSSBSlides(n) {
  showSSBSlide(slideSSBIndex = n);
}
function showSSBSlide(n) {
  let i;
  let slidesSSB = document.getElementsByClassName("mySuperSB");
  if (n > slidesSSB.length) {slideSSBIndex = 1} 
  if (n < 1) {slideSSBIndex = slidesSSB.length}
  for (i = 0; i < slidesSSB.length; i++) {
      slidesSSB[i].style.display = "none"; 
  }
  slidesSSB[slideSSBIndex-1].style.display = "block"; 
}

function smashBros(marioBro) {
    
    let carouselInner = document.querySelector('.superSB');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Super Smash Bros.') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h2');
            let gameS = document.createElement('h4');
            let release = document.createElement('h6');
            let na = document.createElement('p');
            let eu = document.createElement('p');
            let jp = document.createElement('p');
            let au = document.createElement('p');

            ncarStandard.className = 'mySuperSB slides';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;
            release.innerText = 'Release Dates: ';
            na.innerText = k.release.na;
            eu.innerText = k.release.eu;
            jp.innerText = k.release.jp;
            au.innerText= k.release.au;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);
            ncarStandard.appendChild(release);
            ncarStandard.appendChild(na);
            ncarStandard.appendChild(eu);
            ncarStandard.appendChild(jp);
            ncarStandard.appendChild(au);


        } else {
            //console.log(k.amiiboSeries);
            //console.log('not SSB');
        }

    })
}


//legend of zelda
//carousel
var slideLZIndex = 1;
showLZSlide(slideLZIndex);
// Next/previous controls
function plusLZSlides(n) {
  showLZSlide(slideLZIndex += n);
}
// Thumbnail image controls
function currentLZSlides(n) {
  showLZSlide(slideLZIndex = n);
}
function showLZSlide(n) {
  let i;
  let slidesLZ = document.getElementsByClassName("myLegend");
  if (n > slidesLZ.length) {slideLZIndex = 1} 
  if (n < 1) {slideLZIndex = slidesLZ.length}
  for (i = 0; i < slidesLZ.length; i++) {
      slidesLZ[i].style.display = "none"; 
  }
  slidesLZ[slideLZIndex-1].style.display = "block"; 
}

function legendZ(marioBro) {
    let carouselInner = document.querySelector('.legendZ');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Legend Of Zelda') {
            
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h2');
            let gameS = document.createElement('h4');
            let release = document.createElement('h6');
            let na = document.createElement('p');
            let eu = document.createElement('p');
            let jp = document.createElement('p');
            let au = document.createElement('p');

            ncarStandard.className = 'myLegend slides';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;
            release.innerText = 'Release Dates: ';
            na.innerText = k.release.na;
            eu.innerText = k.release.eu;
            jp.innerText = k.release.jp;
            au.innerText= k.release.au;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);
            ncarStandard.appendChild(release);
            ncarStandard.appendChild(na);
            ncarStandard.appendChild(eu);
            ncarStandard.appendChild(jp);
            ncarStandard.appendChild(au);


        } else {
            
            //console.log('zelda');
        }

    })
}

//pokemon
//carousel
var slidePokeIndex = 1;
showPokeSlide(slidePokeIndex);
// Next/previous controls
function plusPokeSlides(n) {
  showPokeSlide(slidePokeIndex += n);
}
// Thumbnail image controls
function currentPokeSlides(n) {
  showPokeSlide(slidePokeIndex = n);
}
function showPokeSlide(n) {
  let i;
  let slidesPoke = document.getElementsByClassName("myPokemon");
  if (n > slidesPoke.length) {slidePokeIndex = 1} 
  if (n < 1) {slidePokeIndex = slidesPoke.length}
  for (i = 0; i < slidesPoke.length; i++) {
      slidesPoke[i].style.display = "none"; 
  }
  slidesPoke[slidePokeIndex-1].style.display = "block"; 
}

function pokemon(marioBro) {
    let marioAmii = marioBro.amiiboSeries;
    let carouselInner = document.querySelector('.pokemon');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Pokemon' || k.gameSeries == 'Pokemon') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h4');
            let gameS = document.createElement('p');
            

            ncarStandard.className = 'myPokemon slidesMini';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;
            

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);
            


        } else {
            //console.log(k.amiiboSeries);
            //console.log('pokemon');
        }

    })
}

//animal crossing
//carousel
var slideACIndex = 1;
showACSlide(slideACIndex);
// Next/previous controls
function plusACSlides(n) {
  showACSlide(slideACIndex += n);
}
// Thumbnail image controls
function currentACSlides(n) {
  showACSlide(slideACIndex = n);
}
function showACSlide(n) {
  let i;
  let slidesAC = document.getElementsByClassName("myAnimal");
  if (n > slidesAC.length) {slideACIndex = 1} 
  if (n < 1) {slideACIndex = slidesAC.length}
  for (i = 0; i < slidesAC.length; i++) {
      slidesAC[i].style.display = "none"; 
  }
  slidesAC[slideACIndex-1].style.display = "block"; 
}

function animalC(marioBro) {
    let carouselInner = document.querySelector('.animalC');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Animal Crossing') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h4');
            let gameS = document.createElement('p');

            ncarStandard.className = 'myAnimal slidesMini';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);


        } else {
            
            //console.log('animal crossing');
        }

    })
}

//splatoon******
//carousel
var splatoonIndex = 1;
showSplatoonSlides(splatoonIndex);
// Next/previous controls
function plusSplatoonSlides(n) {
    showSplatoonSlides(splatoonIndex += n);
}
// Thumbnail image controls
function currentSplatoonSlide(n) {
    showSplatoonSlides(splatoonIndex = n);
}
function showSplatoonSlides(n) {
  let i;
  let slideSplatoon = document.getElementsByClassName("mySplatoon");
  if (n > slideSplatoon.length) {splatoonIndex = 1} 
  if (n < 1) {splatoonIndex = slideSplatoon.length}
  for (i = 0; i < slideSplatoon.length; i++) {
      slideSplatoon[i].style.display = "none"; 
  }
  slideSplatoon[splatoonIndex-1].style.display = "block"; 
}

function splatoon(marioBro) {
    let carouselInner = document.querySelector('.splatoon');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Splatoon') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h4');
            let gameS = document.createElement('p');

            ncarStandard.className = 'mySplatoon slidesMini';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);


        } else {
            
            //console.log('Splatoon');
        }

    })
}

//monster hunter*****
//carousel
var slideMonsterIndex = 1;
showMonsterSlide(slideMonsterIndex);
// Next/previous controls
function plusMonsterSlides(n) {
  showMonsterSlide(slideMonsterIndex += n);
}
// Thumbnail image controls
function currentMonsterSlides(n) {
  showMonsterSlide(slideMonsterIndex = n);
}
function showMonsterSlide(n) {
  let i;
  let slidesMonster = document.getElementsByClassName("myMonster");
  if (n > slidesMonster.length) {slideMonsterIndex = 1} 
  if (n < 1) {slideMonsterIndex = slidesMonster.length}
  for (i = 0; i < slidesMonster.length; i++) {
      slidesMonster[i].style.display = "none"; 
  }
  slidesMonster[slideMonsterIndex-1].style.display = "block"; 
}

function monster(marioBro) {
    let carouselInner = document.querySelector('.monster');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Monster Hunter') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h4');
            let gameS = document.createElement('p');

            ncarStandard.className = 'myMonster slidesMini';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);


        } else {
            
            //console.log('MH');
        }

    })
}



//Various Marios*****
//carousel
var slideMMIndex = 1;
showMMSlide(slideMMIndex);
// Next/previous controls
function plusMMSlides(n) {
  showMMSlide(slideMMIndex += n);
}
// Thumbnail image controls
function currentMMSlides(n) {
  showMMSlide(slideMMIndex = n);
}
function showMMSlide(n) {
  let i;
  let slidesMM = document.getElementsByClassName("myMM");
  if (n > slidesMM.length) {slideMMIndex = 1} 
  if (n < 1) {slideMMIndex = slidesMM.length}
  for (i = 0; i < slidesMM.length; i++) {
      slidesMM[i].style.display = "none"; 
  }
  slidesMM[slideMMIndex-1].style.display = "block"; 
}

function moreMario(marioBro) {
    let carouselInner = document.querySelector('.moreMario');

    marioBro.forEach( k => {
        if (k.amiiboSeries == '8-bit Mario' || k.amiiboSeries == 'Mario Sports Superstars' || k.amiiboSeries == "Yoshi's Woolly World" || k.amiiboSeries == 'Skylanders') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h4');
            let gameS = document.createElement('p');

            ncarStandard.className = 'myMM slidesMini';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);


        } else {
            
            //console.log('MM');
        }

    })
}


//Classics*****
//carousel
var slideCCIndex = 1;
showCCSlide(slideCCIndex);
// Next/previous controls
function plusCCSlides(n) {
  showCCSlide(slideCCIndex += n);
}
// Thumbnail image controls
function currentCCSlides(n) {
  showCCSlide(slideCCIndex = n);
}
function showCCSlide(n) {
  let i;
  let slidesCC = document.getElementsByClassName("myClassic");
  if (n > slidesCC.length) {slideCCIndex = 1} 
  if (n < 1) {slideCCIndex = slidesCC.length}
  for (i = 0; i < slidesCC.length; i++) {
      slidesCC[i].style.display = "none"; 
  }
  slidesCC[slideCCIndex-1].style.display = "block"; 
}

function classics(marioBro) {
    let carouselInner = document.querySelector('.classic');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'Metroid' || k.amiiboSeries == 'Kirby' || k.amiiboSeries == 'Mega Man' || k.amiiboSeries == 'Pikmin'){
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h4');
            let gameS = document.createElement('p');

            ncarStandard.className = 'myClassic slidesMini';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);


        } else {
            
            //console.log('Classic');
        }

    })
}


//OTHERS*/VARIOUS****
//carousel
var slideVarIndex = 1;
showVarSlide(slideVarIndex);
// Next/previous controls
function plusVarSlides(n) {
  showVarSlide(slideVarIndex += n);
}
// Thumbnail image controls
function currentVarSlides(n) {
  showVarSlide(slideVarIndex = n);
}
function showVarSlide(n) {
  let i;
  let slidesVar = document.getElementsByClassName("myVar");
  if (n > slidesVar.length) {slideVarIndex = 1} 
  if (n < 1) {slideVarIndex = slidesVar.length}
  for (i = 0; i < slidesVar.length; i++) {
      slidesVar[i].style.display = "none"; 
  }
  slidesVar[slideVarIndex-1].style.display = "block"; 
}

function other(marioBro) {
    let carouselInner = document.querySelector('.various');

    marioBro.forEach( k => {
        if (k.amiiboSeries == 'BoxBoy!' || k.amiiboSeries == 'Chibi-Robo!' || k.amiiboSeries == 'Shovel Knight' || k.amiiboSeries == 'Diablo' || k.amiiboSeries == 'Fire Emblem' ||k.amiiboSeries == 'Others') {
            //console.log('SMB');
            let ncarStandard = document.createElement('div');
            let img = document.createElement('img');
            let name = document.createElement('h4');
            let gameS = document.createElement('p');

            ncarStandard.className = 'myVar slidesMini';
            img.src = k.image;
            name.innerText = k.name;
            gameS.innerText = k.gameSeries;

            carouselInner.appendChild(ncarStandard);
            ncarStandard.appendChild(img);
            ncarStandard.appendChild(name);
            ncarStandard.appendChild(gameS);


        } else {
            
            //console.log('other');
        }

    })
}