# Melvin-Web_Meesterschap-Blog

## NES Controller

### Donderdag 2 - 4 - 2026
Ik wilde vandaag alvast een begin maken aan mijn controller. Dus had ik alvast een eerste layout gemaakt. Ik heb wel alvast gekeken naar bepaalde fonts en heb de afmetingen van de controller ook overgenomen van een voorbeeld, die bronnen staan hieronder. Maar voordat ik was begonnen met coderen had ik hem eerst op papier uitgetekend zodat ik makkelijker aan kon geven welk element wat zou moeten zijn. Op deze manier kon ik mijn HTML meteen beter en schoon opzetten.

<img src="Assets/README_imgs/NES/NES_EersteSchets.jpg" alt="Eerste schets gemaakt op papier voor layout van code">
<img src="Assets/README_imgs/NES/Voortgang_2-4-2026.png" alt="Eerste opzet van een NES controller">

#### Bronnen
https://font.download/font/nes-controller<br>
https://www.dimensions.com/element/nes-controller<br>

### Zaterdag 4 - 4 - 2026
Vandaag heb ik de standaard styling van mijn NES controller afgemaakt. Alleeen het uiterlijk is redellijk klaar. Ik wil misschien later nog wat gradients toevoegen op de buttons om ze meer diepte te geven. Ook hebben ze nog geen active state. 

<img src="Assets/README_imgs/NES/Voortgang_4-4-2026.png" alt="Styling van de NES controller die bijna af is">

#### Bronnen
https://fontawesome.com/search?q=arrow&ic=free-collection<br>
https://www.fontspace.com/ro-spritendo-font-f83198<br>

### Zondag 26 - 4 - 2026
Vandaag ging ik verder aan mijn NES controller, ik wilde hem namelijk 3D hebben. Dit wordt waarschijnlijk de enige in 3D omdat deze controller de enige is die echt compleet vierkant is. Ik heb hier lang moeite mee gehad, en had uiteindelijk ChatGPT gevraagd om hulp. Ik had aan hem gevraagd of hij gewoon een 3D blok kon maken. Dat heb ik in een CodePen gezet en daarna zelf proberen na te maken voor mijn eigen ontwerp. Later de dag heb ik de zijkanten en achterkant ook nog gestyled zoals die van de NES. Alleen de aansluiting voor waar normaal gesproken het draad zit heb ik niet gemaakt, ik vond het netter om die net te doen aangezien ik niet van plan was het echte draad te maken.

<img src="Assets/README_imgs/NES/Voortgang_26-4-2026.png">
<img src="Assets/README_imgs/NES/Voortgang2_26-4-2026.png">

#### ChatGPT
Prompt: make me a 3D cube using HTML and CSS 
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3D Cube</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #111;
    }

    .scene {
      width: 200px;
      height: 200px;
      perspective: 600px;
    }

    .cube {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(-30deg) rotateY(-30deg);
      animation: rotate 6s infinite linear;
    }

    .face {
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(0, 150, 255, 0.7);
      border: 2px solid #fff;
    }

    .front  { transform: rotateY(  0deg) translateZ(100px); }
    .back   { transform: rotateY(180deg) translateZ(100px); }
    .right  { transform: rotateY( 90deg) translateZ(100px); }
    .left   { transform: rotateY(-90deg) translateZ(100px); }
    .top    { transform: rotateX( 90deg) translateZ(100px); }
    .bottom { transform: rotateX(-90deg) translateZ(100px); }

    @keyframes rotate {
      from { transform: rotateX(-30deg) rotateY(0deg); }
      to   { transform: rotateX(-30deg) rotateY(360deg); }
    }
  </style>
</head>
<body>

<div class="scene">
  <div class="cube">
    <div class="face front"></div>
    <div class="face back"></div>
    <div class="face right"></div>
    <div class="face left"></div>
    <div class="face top"></div>
    <div class="face bottom"></div>
  </div>
</div>

</body>
</html>
```

## GameBoy

### Donderdag 7 - 5 - 2026
Vandaag heb ik een begin gemaakt aan de gameboy controller, origineel was het idee om alleen controllers te doen, maar om het scherm makkelijker te verwerken op de verschillende pagina's leek het me handiger om ook handheld controllers te maken. Ik ben begonnen met hem op papier weer uit te schetsen om daarna de html te schrijven.

<img src="Assets/README_imgs/GameBoy/Gameboy_EersteSchets.jpg">
<img src="Assets/README_imgs/GameBoy/Vooruitgang_7-5-2026.png">

### Maandag 11 - 5 - 2026
Ik heb vandaag de styling gedaan van de controller. Hier liep ik soms tegen iets meer dingen aan, ik had namelijk oorspronkelijk gepland om de teksten van buttons via een ::after te doen, maar realiseerde me tijdens het maken al snel dat dat niet kan op een button. Dus heb ik het veranderd naar een div container. Voor de rest ging de styling vrij soepel. Ik kon nog gebruik maken van een lineair gradient voor de lijnen boven het beeldscherm, dat vond ik een slimme oplossing voor dat probleem.

<img src="Assets/README_imgs/GameBoy/Vooruitgang_11-5-2026.png">

## Game and Watch 

### Dinsdag 12 - 5 - 2026
Ik moest nog een paar controllers bedenken, want ik moest er nog meer hebben. In eerste instantie wilde ik die van n64 of gamecube namaken, maar die hadden een iets te moeilijke vorm. Dus koos ik voor een simpele Game & Watch, en dan specifiek Parachute, een controller die mijn vader vroeger had. Deze had ik weer eerst op papier geschetst. Deze keer kon ik hem helemaal namaken zoals ik hem eerst op papier had geschetst. Omdat ik deze niet zelf heb, moest ik wel een voorbeeld gebruiken. De styling is nog niet helemaal perfect. Maar die puntjes op de i kunnen later nog.

<img src="Assets/README_imgs/GameWatch/Voorbeeld.jpg">
<img src="Assets/README_imgs/GameWatch/GameWatch_EersteSchets.jpg" style="rotate: -90deg">
<img src="Assets/README_imgs/GameWatch/Voortuitgang_12-5-2026.png">

### Woensdag 13 - 5 - 2026
Vandaag heb ik de styling afgemaakt van de game en watch. Dit was het centereren van het middelste scherm en de puntjes op de i. Die puntjes waren bijvoorbeeld de groter van buttons, witruimtes, styling van teksten.

<img src="Assets/README_imgs/GameWatch/Voortuitgang_13-5-2026.png">

## Wii 

### Vrijdag 15 - 5 - 2026
Aangezien ik de wii controller al eerder had gemaakt voor sprint 0, heb ik van deze geen schets gemaakt. Maar ik hem wel mijn html code wat netter gemaakt. Zo maak ik gebruik van before en after voor de geluid gaten om regels html te besparen.

<img src="Assets/README_imgs/Wii/Vooruitgang_15-5-2026.png">

## DS 

### Maandag 11 - 5 - 2026
Ik ben eerst weer begonnen met het maken van een schets van de controller. Hoe meer ik codeer, hoe beter ik in de schets al rekening kan houden met latere styling. Zo kon ik bijvoorbeeld bij de gaten voor start en select button dat ik niet de tekst in een after kan doen omdat buttons geen after kunnen hebben. Het helpt dus wel. Ik ben niet klaar met de styling vandaag. Maar ik heb flink op kunnen schieten. Veel styling voor buttons lijkt wel op onderdelen van andere controllers, dus daar kan ik veel code van kopiëren.

<img src="Assets/README_imgs/DS/DS_EersteSchets.jpg">
<img src="Assets/README_imgs/DS/Vooruitgang_11-5-2026.png">

### Dinsdag 12 - 5 - 2026
De DS styling heb ik vandaag qua uiterlijk vandaag afgemaakt, ik zou later alleen nog active styling voor buttons enzo. Maar het is me wel vandaag gelukt om de DS open en dicht te laten flippen. Dat was even lastig weer met 3D, maar is wel uiteindelijk gelukt.

<img src="Assets/README_imgs/DS/Vooruitgang_12-5-2026.png">
<img src="Assets/README_imgs/DS/Vooruitgang-Dicht_12-5-2026.png">

## 3DS 

### Donderdag 14 - 5 - 2026
Vandaag heb ik de volledige styling gedaan van de 3DS. Ik heb geprobeerd mijn code deze keer minder herhalend te maken, door hetzelfde script te gebruiken voor het openklappen als de DS, en hetzelfde script voor de joystick als die van beide switch controllers. Aangezien ik nu al meerdere keren eerst een schets had gemaakt van te voren ging heel soepel bij het maken van de HTML.

<img src="Assets/README_imgs/3DS/3DS_EersteSchets.jpg">
<img src="Assets/README_imgs/3DS/Voortuitgang_14-5-2026.png">
<img src="Assets/README_imgs/3DS/Voortuitgang-Dicht_14-5-2026.png">

## Switch Controller

### Vrijdag 1 - 5 - 2026
Vandaag een klein begin gemaakt aan de switch controllers. Zo heb ik hem eerst op papier weer een beetje uitgetekend zodat ik hopelijk hem dan makkelijker kan namaken met code. Daarbij heb ik ook andere kleinere dingetjes gedaan. Zoals het volledig opzetten van mijn bestand, dus ik heb alle html en css bestanden aangemaakt en gelinkt via footer linkjes.
```
    <footer>
        <a href="../index.html">NES Controller</a>
        <a href="../Controllers/SNES.html">SNES Controller</a>
        <a href="../Controllers/GameCube.html">GameCube Controller</a>
        <a href="../Controllers/N64.html">N64 Controller</a>
        <a href="../Controllers/Wii.html">Wii Controller</a>
        <a href="../Controllers/Switch.html">Switch Controller</a>
        <a href="../Controllers/Switch2.html">Switch 2 Controller</a>
    </footer>
```

<img src="Assets/README_imgs/Switch/Switch_EersteSchets.jpg">
<img src="Assets/README_imgs/Switch/Vooruitgang_1-5-2026.png">

### Zaterdag 2 - 5 - 2026
Heb vandaag meer styling toegevoegd aan de switch onctrollers. Ik weet nog niet zeker wat ik wil doen met de binnen kant van de controller en hoe ik ze responsive wil maken, dus voor laat ik het hier bij. Ik heb wel al de joystick werkend en netjes gekregen, dus die soort code kan ik ook gebruiken voor andere controllers.

<img src="Assets/README_imgs/Switch/Vooruitgang_2-5-2026.png">

### Donderdag 7 - 5 - 2026
Aangezien het leuker is als er een scherm is waar de content op te zien is heb ik het scherm ook toegevoegd. Dat scheelt, want ik wist nog niet wat ik ging doen met de binnenkant.

<img src="Assets/README_imgs/Switch/Vooruitgang_7-5-2026.png">

### Vrijdag 15 - 5 - 2026
Easter egg toegevoegd, de switch controllers kwamen in veel verschillende kleuren. Ik heb toegevoegd dat als je op de + of - van een controller drukt, dat de kleur van die kant veranderd.

Bron kleuren: https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYwY-w_I479WtU86ChXSwaWMJ_rT2GSUoILEcc6AADpwJnBXPFzl10Ckr4oc5XBoAs4j8agIUVv_HNU3zlHvDFhvo9sfnIk593Xn4JsS36Bltfv0zy9YRXKMVtKxAWB337klS9i0zNhOM&usqp=CAc

<img src="Assets/README_imgs/Switch/EasterEgg_Kleuren.png">


## Switch 2 Controller

### Zaterdag 2 - 5 - 2026
Eerder vandaag had ik de normale switch controllers gemaakt, aangezien deze er veel op lijkt, had ik deze niet eerst uitgeschets. Ik had wel nog geprobeerd om een aparte stylesheet te maken die voor beide bestanden zou werken, zodat ik niet veel dubbele code had. Maar kreeg daar nog niet het overzicht. Maar heb wel nog de active state voor sommige knoppen al toegevoegd. Die van de L en R knoppen wilde nog niet werken omdat die een z-index van -1 hebben voor de styling. Daar kijk ik later nog naar.

<img src="Assets/README_imgs/Switch2/Vooruitgang_2-5-2026.png">

### Donderdag 7 - 5 - 2026
Net zoals bij de switch controller, heb ik ook bij switch 2 een scherm toegevoegd.

<img src="Assets/README_imgs/Switch2/Vooruitgang_7-5-2026.png">

## Algemeen

### Dinsdag 12 - 5 - 2026
Vandaag had ik al mijn teksten uitgetypt in een google document. Het was namelijk belangrijk dat dit gedaan was voor het gesprek van woensdag zodat ik kon laten zien dat ik helemaal up to date was qua content. Ik had vandaag alleen geen tijd meer om dit ook meteen al vorm te geven voor elke controller die ik op het moment heb.

### Vrijdag 15 - 5 - 2026
Vandaag heb ik voor elke controller waarvan het project al afgerond is, heb ik de github pagina en website toegevoegd aan knoppen zodat je die vanaf een controller kan bereiken.

Ook heb ik vandaag gefixt dat de bij de game and watch en gameboy controllers de tekst nu wordt laten zien in slides. Dit zijn namelijk de 2 controllers waarbij ik wel een scherm heb, maar een kleintje. Het leek me dus handig om via losse slides de content te laten zien. Voor nu is de styling nog vrij simpel, al heeft de game en watch wel een overlay over een LCD vibe over te brengen. Maar het voelt buiten een pixel font nog niet echt gamy.

<img src="Assets/README_imgs/GameWatch/Voortuitgang_15-5-2026.png">
<img src="Assets/README_imgs/GameBoy/Voortuitgang_15-5-2026.png">

### Zaterdag 16 - 5 - 2026
Vandaag heb ik voor verschillende controllers toegevoegd dat de teksten erin staan. Dit ging vooral om de functionaliteit en ik had nog niet al te veel aandacht besteed aan de styling van de teksten, dat kan later. Voor de beide switches kon ik bijna hetzelfde script gebruiken, maar ik kreeg de variabel namen nog niet helemaal goed voor elkaar. Dus voor nu zijn dat nog losse scripts. Maar voor de game en watch, gameboy en DS kon ik wel het script schrijven / samenvoegen. De DS heeft namelijk 2 schermen, maar ik gebruik alleen de onderste als slideshows, de bovenste is namelijk gewoon een video zodat ik de animaties op die pagina goed kon laten zien. Ik wilde hem ook gebruiken voor de 3DS, maar kreeg dit ook niet voor elkaar omdat hij met de 3DS 2 verschillende slideshows heeft die tegelijk naar de volgende slide moeten gaan.

<img src="Assets/README_imgs/DS/Vooruitgang_16-5-2026.png">
<img src="Assets/README_imgs/3DS/Voortuitgang_16-5-2026.png">
<img src="Assets/README_imgs/Switch/Vooruitgang_16-5-2026.png">
<img src="Assets/README_imgs/Switch/Vooruitgang-Detail_16-5-2026.png">
<img src="Assets/README_imgs/Switch2/Vooruitgang_16-5-2026.png">
<img src="Assets/README_imgs/Switch2/Vooruitgang-Detali_16-5-2026.png">

### Zondag 17 - 5 - 2026
Vandaag ben ik bezig geweest met verschillende onderdelen. Zo ben ik begonnen met het regelen dat de knoppen van de NES controller werken, door hun z-index wat te verhogen en de js aan te passen zodat het ronddraaien genegeerd wordt als je op een knop wilt drukken. Daarbij heb ik voor beide de NES en de Wii de popovers toegevoegd zodat de teksten op de juiste manier gezien kunnen worden.

Voor de rest heb ik styling gemaakt voor de overzicht pagina voor beide switch controllers. Hierbij was het een beetje lastig voor de horizontale scroll. En dat de focus goed komt te liggen in het midden van het scherm. 

Ook heb ik de footer styling afgemaakt. Ik had wel wat plaatjes van het internet afgenomen. Die plaatjes staan hieronder in de bronnenlijst.

<img src="Assets/README_imgs/Switch/Vooruitgang_17-5-2026.png">
<img src="Assets/README_imgs/Switch2/Vooruitgang-Detali_17-5-2026.png">
<img src="Assets/README_imgs/Algemeen/Footer.png">

#### Bronnen:
NES: https://seeklogo.com/vector-logo/312569/nintendo-entertainment-system <br>
Game&Watch: https://commons.wikimedia.org/wiki/File:Game_and_watch_logo.svg <br>
GameBoy: https://commons.wikimedia.org/wiki/File:Nintendo_Game_Boy_Logo.svg <br>
Wii: https://nl.wikipedia.org/wiki/Bestand:Wii_logo.png <br>
DS: https://nl.wikipedia.org/wiki/Bestand:Nintendo_DS_logo.png <br>
3DS: https://commons.wikimedia.org/wiki/File:3ds_logo.svg <br>
Switch: https://brandlogos.net/nintendo-switch-logo-vector-91545.html <br>
Switch 2: https://commons.wikimedia.org/wiki/File:Nintendo_Switch_2_Red_Logo.svg <br>

### Dinsdag 19 - 5 - 2026
Vandaag ben ik begonnen met het beter maken van mijn footer, het was namelijk niet duidelijk dat het uberhaupt bestond en zou ook niet werken op een mobiel formaat. Dus heb ik een losse knop gemaakt die de footer in en uit klapt. Ook heb gewerkt aan de styling van verschillende controller. Ik heb geprobeerd die van beide switches op elkaar te laten lijken en ook die van beide DS controllers.

<img src="Assets/README_imgs/Algemeen/Footer_Knop.png">
<img src="Assets/README_imgs/DS/Vooruitgang_19-5-2026.png">
<img src="Assets/README_imgs/3DS/Voortuitgang_19-5-2026.png">
<img src="Assets/README_imgs/Switch/Vooruitgang_19-5-2026.png">
<img src="Assets/README_imgs/Switch2/Vooruitgang_19-5-2026.png">

### Zaterdag 23 - 5 - 2026
Vandaag een beetje verschillende dingen gedaan, ik heb een script geschreven waarbij ik makkelijk voor verschillende controllers het responsive kon maken. Dit script werkt goed voor de game and watch, de gameboy, de DS en de 3DS. Voor de switch en switch 2 had ik een ander idee om het repsonsive te maken, maar kreeg dat nog niet werkend. Voor de rest heb ik nog wat icoontjes en plaatjes toegevoegd aan mijn switch 1 en switch 2 scheremn. Zodat ze iets meer vorm krijgen. 

Verder heb ik later op de dag ook nog gekeken naar een paar easter eggs. Zo heb ik aan de NES de wel bekende konami code toegevoegd, en heb ik voor de gameboy een easter egg toegevoegd van kirby en eentje van pokemon. Voor die van pokemon had ik wel wat hulp nodig van AI. 

#### ChatGPT hulp
Prompt 1: New idea. When you press the A button I would like it to "start" a pokemon encounter. I actually just want a visual effect on the screen display of little squares going in a loop from outside to the inside filling the display and having a sfx start<br>
Propmt 2: Okay so none of that was a spiral. I would like it to be just the way it was on a normal gameboy. Little squares filled the screen in a spiral shape going from outside to the middle until the whole screen was covered
```
const aButton = document.getElementById("gameboy-a");
const screen = document.querySelector(".gameboy-screen");

const encounterSfx = new Audio("../Assets/SFX/pokemon-encounter.mp3");

aButton.addEventListener("click", startEncounter);

function startEncounter() {

    const sfx = encounterSfx.cloneNode();
    sfx.play();

    runSpiralEncounter();
}

function runSpiralEncounter() {

    const overlay = document.createElement("div");
    overlay.classList.add("encounter-overlay");
    screen.appendChild(overlay);

    const size = 10;
    const cols = Math.floor(screen.clientWidth / size);
    const rows = Math.floor(screen.clientHeight / size);

    const grid = [];

    // build grid
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {

            const square = document.createElement("div");
            square.classList.add("encounter-square");

            square.style.left = `${x * size}px`;
            square.style.top = `${y * size}px`;

            overlay.appendChild(square);

            grid.push({ el: square });
        }
    }

    const spiralOrder = getSpiralOrder(cols, rows);

    // animate spiral
    spiralOrder.forEach((index, i) => {

        const cell = grid[index];

        if (!cell) return;

        setTimeout(() => {
            cell.el.classList.add("active");
        }, i * 8);
    });

    // cleanup
    setTimeout(() => {
        overlay.remove();
    }, spiralOrder.length * 8 + 500);
}

function getSpiralOrder(cols, rows) {

    const result = [];

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (left <= right && top <= bottom) {

        // left → right
        for (let x = left; x <= right; x++) {
            result.push(top * cols + x);
        }
        top++;

        // top → bottom
        for (let y = top; y <= bottom; y++) {
            result.push(y * cols + right);
        }
        right--;

        if (top <= bottom) {

            // right → left
            for (let x = right; x >= left; x--) {
                result.push(bottom * cols + x);
            }
            bottom--;
        }

        if (left <= right) {

            // bottom → top
            for (let y = bottom; y >= top; y--) {
                result.push(y * cols + left);
            }
            left++;
        }
    }

    return result;
}
```

#### Bronnenlijst
Kilian Valkhof: https://webdirections.org/hover/speakers/kilian-valkhof.php <br>
Peter Paul Koch: https://www.quirksmode.org/about/<br>
Nils Binder: https://9elements.com/blog/author/nils-binder/<br>
Robbert Broersma: https://www.linkedin.com/in/robbertbroersma/<br>
Yolijn van der Kolk: https://www.gebruikercentraal.nl/gebruikersonderzoek-zo-begin-je-gewoon/<br>
Johan Huijkman: https://media.licdn.com/dms/image/v2/D4E03AQGNr6TCw7ccgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666277475310?e=2147483647&v=beta&t=dUOV--XMVKsf4fcZTzu--HOp_-YPIOLEgOxjFwOdD6U<br>
General foto: https://www.pinterest.com/pin/pfps--26247610322356687/<br>

Leerdoelen: https://www.shutterstock.com/nl/image-vector/learning-goals-icon-element-design-2670889603?dd_referrer=https%3A%2F%2Fwww.google.nl%2F<br>
Reflection: https://www.shutterstock.com/nl/image-vector/learning-goals-icon-element-design-2670889603?dd_referrer=https%3A%2F%2Fwww.google.nl%2F<br>

SFX 1-up: https://www.youtube.com/watch?v=o3Tlv7h9I3Y&t=3s<br>
SFX Kirby: https://www.youtube.com/watch?v=9wOgtUvZ9xc<br>
SFX Pokemon Encounter: https://www.youtube.com/watch?v=NrS523dOHU4<br>

### Zondag 24 - 5 - 2026
Vandaag ben ik veel bezig geweest met verschillende easter eggs. Niet per se op volgorde van de controllers. Maar gewoon waar ik op dat moment een idee bij had. Aangezien ik heel veel knoppen heb die nog geen nuttige functie hebben, heb ik ook veel easter eggs te bedenken. Daarom had ik wel al besloten dat ik soms 2 verschillende knoppen gebruik voor dezelfde easter egg, eentje om hem te starten en de andere om hem te eindigen. Ook heb ik besloten dat de dpad knoppen altijd alleen maar een nummer afspelen. Alle easter eggs zijn wel in het thema van die controller. Dus muziek stukken van een DS game zijn hoor je niet bij een andere controller. Er was één easter egg waar ik wat AI hulp bij nodig had. Daar waren veel prompts voor nodig, maar de eerste twee staan hieronder.

#### ChatGPT hulp
Verschillende prompts waren gebruikt om het eindelijk goed werkend te krijgen, maar de eerste twee waren de eerste. <br>
Prompt 1: Are you familiar with the "Wanted" minigame on New super mario bros DS?<br>
Prompt 2: Alright I dont need your specific reasoning, but I would like to make a variation on it. So lets start with some simple coding. I have assets for the Wanted Screen, the heads of all 4 characters that can appear on the wanted screen and the little heads for the bottom screen. Could you make some sort of minigame where the heads bounce around the bottom screen, with obviously 1 correct one that is shown on the screen on the top screen?
```
const btnA = document.getElementById("a-button");
const btnB = document.getElementById("b-button");

const overlay = document.getElementById("wanted-overlay");
const topScreen = document.getElementById("wanted-top");
const bottomScreen = document.getElementById("wanted-bottom");
const targetImg = document.getElementById("wanted-target");

const wantedTheme = new Audio("../Assets/SFX/theme-wanted.mp3");
wantedTheme.volume = 0.2;
wantedTheme.loop = true;

// Characters (source of truth)
const characters = [
    {
        name: "mario",
        head: "../Assets/Images/FindLuigi/Mario-Head.png",
        icon: "../Assets/Images/FindLuigi/Mario-icon.png"
    },
    {
        name: "luigi",
        head: "../Assets/Images/FindLuigi/Luigi-Head.png",
        icon: "../Assets/Images/FindLuigi/Luigi-icon.png"
    },
    {
        name: "wario",
        head: "../Assets/Images/FindLuigi/Wario-Head.png",
        icon: "../Assets/Images/FindLuigi/Wario-icon.png"
    },
    {
        name: "yoshi",
        head: "../Assets/Images/FindLuigi/Yoshi-Head.png",
        icon: "../Assets/Images/FindLuigi/Yoshi-icon.png"
    }
];

// SFX per character
const headSFX = {
    mario: "../Assets/SFX/FoundMario.wav",
    luigi: "../Assets/SFX/FoundLuigi.wav",
    wario: "../Assets/SFX/FoundWario.wav",
    yoshi: "../Assets/SFX/FoundYoshi.wav"
};

let objects = [];
let running = false;
let correctName = null;
let correctIcon = null;

btnA.addEventListener("click", startGame);
btnB.addEventListener("click", stopGame);

function playWinSFX(name) {
    const audio = new Audio(headSFX[name]);
    audio.volume = 0.5;
    audio.play();
}

function startGame() {
    wantedTheme.currentTime = 0;
    wantedTheme.play();

    overlay.classList.remove("hidden");
    bottomScreen.classList.remove("hidden");

    bottomScreen.innerHTML = "";
    objects = [];

    // 🎯 pick target character
    const char = characters[Math.floor(Math.random() * characters.length)];

    targetImg.src = char.head;
    correctIcon = char.icon;
    correctName = char.name;

    // build pool (exactly 1 correct)
    const pool = [];

    pool.push({
        src: correctIcon,
        name: correctName,
        correct: true
    });

    while (pool.length < 30) {
        const randChar = characters[Math.floor(Math.random() * characters.length)];

        if (randChar.icon === correctIcon) continue;

        pool.push({
            src: randChar.icon,
            name: randChar.name,
            correct: false
        });
    }

    pool.sort(() => Math.random() - 0.5);

    pool.forEach(item => {
        const el = document.createElement("img");
        el.src = item.src;
        el.classList.add("wanted-head");

        const obj = {
            el,
            x: Math.random() * (bottomScreen.clientWidth - 50),
            y: Math.random() * (bottomScreen.clientHeight - 50),
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            correct: item.correct,
            name: item.name
        };

        el.addEventListener("click", () => {
            if (obj.correct) {
                playWinSFX(obj.name);
                endGame(true);
            } else {
                el.style.opacity = "0.2";
            }
        });

        bottomScreen.appendChild(el);
        objects.push(obj);
    });

    if (!running) {
        running = true;
        animate();
    }
}

function animate() {
    if (!running) return;

    const w = bottomScreen.clientWidth;
    const h = bottomScreen.clientHeight;

    objects.forEach(obj => {
        obj.x += obj.vx;
        obj.y += obj.vy;

        if (obj.x <= 0 || obj.x >= w - 48) obj.vx *= -1;
        if (obj.y <= 0 || obj.y >= h - 48) obj.vy *= -1;

        obj.el.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
    });

    requestAnimationFrame(animate);
}

function stopAudio() {
    wantedTheme.pause();
    wantedTheme.currentTime = 0;
}

function endGame(success) {
    running = false;

    stopAudio();

    overlay.classList.add("hidden");
    bottomScreen.classList.add("hidden");
}

function stopGame() {
    running = false;

    stopAudio();

    bottomScreen.innerHTML = "";
    objects = [];

    overlay.classList.add("hidden");
    bottomScreen.classList.add("hidden");
}
```

#### Bronnenlijst
Info <br>
https://manual.audacityteam.org/man/reverse.html <br>

Assets: <br> 
https://www.spriters-resource.com/ds_dsi/supermario64ds/asset/6856/ <br>
https://www.deviantart.com/marioandme64/art/THE-COMPLETE-SUPER-MARIO-BROS-1-MARIO-SPRITE-RIG-1171963856 <br>

Muziek / SFX <br>
Tetris: https://www.youtube.com/watch?v=NmCCQxVBfyM <br>
Zelda: https://www.youtube.com/watch?v=EreHPNJHn18&list=PL-KfneHRmNqQJ-F4D4HrfrNxgHDaaJDFF&index=2 <br>
Mario Shake: https://www.youtube.com/watch?v=P1gJJqYXpTc <br>
Wii startup: https://www.youtube.com/watch?v=x1FM5uM_998 <br>
Wii Sports: https://www.youtube.com/watch?v=2qvAxPqy2wA&list=RD2qvAxPqy2wA&start_radio=1 <br>
Mario Wanted Theme: https://www.youtube.com/watch?v=qTrzAk7p2rE <br>
Mario Wanted SFX: https://sounds.spriters-resource.com/ds_dsi/supermario64ds/asset/519578/ <br>
Bowsers Inside Story: https://www.youtube.com/watch?v=Ckxy-i7Dc5U <br>
Mario Jump: https://www.youtube.com/watch?v=37-paiEz0mQ <br>
Duck Hit: https://sounds.spriters-resource.com/nes/duckhunt/asset/397761/ <br>


### Maandag 25 - 5 -2026
Vandaag weer verchillende dingen gedaan. Zo was ik begonnen met mijn DS controller afmaken door er nog een easter egg aan toe te voegen. Maar alles dat ik kon bedenken zou al snel te veel werk zijn of wist ik niet zeker of het zou gaan lukken. En die tijd wilde ik er op dit moment niet meer echt aan besteden, want er zit al heel veel uur in deze website. Dus bedacht ik om gewoon alleen het laadscherm van iets te doen. Ik koos hier voor pictochat. Hiervoor heb ik dus alleen een laadscherm ontworpen die blijft hangen op 130%. Ook heb ik de wii controller nu beter responsive gemaakt en heb ik er ook voor gezorgd dat de transitie voor de wii sports easter egg soepeler verloopt als de controller horizontaal ligt. De styling voor de NES en Wii pop-ups heb ik ook vandaag gedaan. Deze wilde ik namelijk in de stijl van een oud en een nieuw beeldscherm. Deze zouden nog wel beter kunnen, maar voor nu ben ik er tevreden mee.

Voor een paar simpele en snelle easter eggs heb ik muziekstuken toegevoegd aan de 3DS, Switch en Switch 2. Hiervoor kon ik veel dezelfde code steeds gebruiken dus ging het vrij snel. Het langste was nog het bedenken welke nummers ik steeds wilde gaan gebruiken. Voor de switch 2 heb ik nu ook toegevoegd dat je de controller van kleur kan veranderen. Maar omdat deze controller nog vrij nieuw is, zijn er nog niet heel veel varianten van.

#### Bronnenlijst
Assets <br>
https://freeavmhzwr.click/product_tag/46272586_.html <br>
https://platform.theverge.com/wp-content/uploads/sites/2/2026/01/nintendo_switch2_joycons1.jpg?quality=90&strip=all&crop=16.658266129032,0,66.683467741935,100 <br>

SFX <br>
Gym Leader theme: https://www.youtube.com/watch?v=hcV6xVukj60 <br>
Super Star Theme: https://www.youtube.com/watch?v=e9r5hx47kxM&list=RDe9r5hx47kxM&start_radio=1 <br>
DK Rap: https://www.youtube.com/watch?v=rWSgsbWiX_g&list=RDrWSgsbWiX_g&start_radio=1 <br>
Comet Observatory Theme: https://www.youtube.com/watch?v=wBhzmys2-eU&list=RDwBhzmys2-eU&start_radio=1 <br>
Mario 3D land theme: https://www.youtube.com/watch?v=elpT7gEgffQ&list=PLESFnlO3kNnqPB453OFSGS5AkfhBmcr7t&index=2 <br>
XY Gym leader: https://www.youtube.com/watch?v=zQzl9_ja99s <br>

### Donderdag 28 - 5 - 2026
Vandaag heb ik niet heel veel gedaan, ik heb elke knop voor de weekly nerds die ik nog niet had aangemaakt en heb aan elke een plaatje toegevoegd, Die van The Web You Want waren een beetje lastiger om te verzamelen. Dus moest ik soms een beetje aanpassen in Figma. 

#### Bronnenlijst
Q42: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8N0z2bF8Pxj1dg3aH7BkH8n_XXeyXSORuA&s <br>
Hans de Zwart: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAeFFQvga2evdh4uIlxG3RL7xyTARK-UtRg&s <br>
De Voorhoede: https://media.licdn.com/dms/image/v2/C4E0BAQHrYZpRfCbNzw/company-logo_200_200/company-logo_200_200/0/1658139463799/de_voorhoede_logo?e=2147483647&v=beta&t=UreH-hnOSFK_7F1WMRk-d55UiEmYZFnw-7HAGy6pdEw <br>
The Web You Want: https://the-web-you-want.org/

### Vrijdag 29 - 5 - 2026
In de ochtend begonnen met het toevoegen van de tekst van nerd Hans en een icoontje toegevoegd van het cafe van Rosa, aangezien ik van Rosa zelf niet echt een goede afbeelding kon vinden. Later op de dag heb ik nog een easter egg toegevoegd aan de 3DS. Origineel had ik als gedachte dat er allemaal coins naar beneden zouden vallen op beide scheremn en dat je die dan op kon pakken door rond te springen op het onderste scherm. Maar om het iets minder ambitieus te maken, heb ik het alleen als een overlay gehouden.

Ook heb ik iets gefixt waar ik al een tijdje naar keek. Dat ik meerdere keren zo goed als dezelfde code steeds gebruikte voor een DPad. Ik heb vandaag eindelijk gefixt dat de algemene code daarvoor nu in de global.css staat en dat alleen de specifieke aanpassingen per controller staan. Dat scheelte heel veel extra code.

#### Bronnenlijst
Repair Cafe: https://www.repaircafe.org/wp-content/uploads/2019/10/RC_socialmedia_19-scaled.jpg <br>
Mario Coin: https://www.pngitem.com/middle/owJmTx_super-mario-wiki-the-mario-encyclopedia-super-mario/ <br>

SFX <br>
Super Mario Bros 2: https://www.youtube.com/watch?v=mnHE2Mza9JU&list=PL8hbIab0m7wpZo3ki90NheJPC1Tm0Qr7L&index=60

### Button functionaliteiten lijst
#### NES
* Dpad-up: Pop-up
* Dpad-left: Pop-up
* Dpad-right: Pop-up
* Dpad-down: Pop-up
* Start: Github pagina
* Select: Website
* A: Mario Jump
* B: Duck Hunt

#### Game and Watch
* Left: Vorige slide
* Right: Volgende slide
* Game A: Github pagina
* Game B: Website
* Time: Laat huidige tijd zien

#### Gameboy
* Dpad-up: Zelda muziek
* Dpad-left: Vorige slide
* Dpad-right: Volgende slide
* Dpad-down: Tetris muziek
* Start: Github
* Select: Website
* A: Pokemon Encounter
* B: Kirby Suck

#### Wii
* Power Button: Afsluit geluid / afsluiten
* Dpad-up: Pop-up
* Dpad-left: Pop-up
* Dpad-right: Pop-up
* Dpad-down: Pop-up
* A: Pop-up
* Plus: Begin wii sports modus
* Home: Mario Shake
* Minus: Beeindig wii sport modus
* 1: Github
* 2: Website

#### DS
* Dpad-up: Mario Kart Theme
* Dpad-left: Vorige slide
* Dpad-right: Volgende slide
* Dpad-down: Bowser Inside Story Theme
* X: Start PicoChat
* Y: Stop PictoChat
* A: Start wanted minigame
* B: Stop wanted minigame
* Start: Gihtub
* Select: Website

#### 3DS
* Joystick:
* Dpad-up: Mario 3D land theme
* Dpad-left: Vorige slide
* Dpad-right: Volgende slide
* Dpad-down: Pokemon XY Gym Leader theme
* Home:
* C-stick:
* X: Start SMB2 Coins
* Y: Stop SMB2 Coins
* A:
* B:
* Start: Github
* Select: Website
* Volume-slider:
* 3D-slider:

#### Switch
* Minus: Verander kleur linker kant
* Left-joystick:
* Up: Gym Leader Theme
* Left: Vorige button
* Right: Volgende button
* Down: Super Star theme
* Screenshot: Github
* Plus: Verander kleur rechter kant
* X:
* Y:
* A: Selecteer button
* B: Terug naar buttons vanaf detail
* Right joystick:
* Home: Website

#### Switch
* Minus: Verander kleur linker kant
* Left-joystick:
* Up: DK Rap uit Donkey Kong Bananza
* Left: Vorige button
* Right: Volgende button
* Down: Comet Observatory uit Mario Galaxy Bundel
* Screenshot: 
* Plus: Verander kleur rechter kant
* X:
* Y:
* A: Selecteer button
* B: Terug naar buttons vanaf detail
* Right joystick:
* Home:
* Online: