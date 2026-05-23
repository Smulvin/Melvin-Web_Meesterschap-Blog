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

### Dinsdag 19 - 5 - 2025
Vandaag ben ik begonnen met het beter maken van mijn footer, het was namelijk niet duidelijk dat het uberhaupt bestond en zou ook niet werken op een mobiel formaat. Dus heb ik een losse knop gemaakt die de footer in en uit klapt. Ook heb gewerkt aan de styling van verschillende controller. Ik heb geprobeerd die van beide switches op elkaar te laten lijken en ook die van beide DS controllers.

<img src="Assets/README_imgs/Algemeen/Footer_Knop.png">
<img src="Assets/README_imgs/DS/Vooruitgang_19-5-2026.png">
<img src="Assets/README_imgs/3DS/Voortuitgang_19-5-2026.png">
<img src="Assets/README_imgs/Switch/Vooruitgang_19-5-2026.png">
<img src="Assets/README_imgs/Switch2/Vooruitgang_19-5-2026.png">

### Zaterdag 23 - 5 - 2026
Vandaag een beetje verschillende dingen gedaan, ik heb een script geschreven waarbij ik makkelijk voor verschillende controllers het responsive kon maken. Dit script werkt goed voor de game and watch, de gameboy, de DS en de 3DS. Voor de switch en switch 2 had ik een ander idee om het repsonsive te maken, maar kreeg dat nog niet werkend. Voor de rest heb ik nog wat icoontjes en plaatjes toegevoegd aan mijn switch 1 en switch 2 scheremn. Zodat ze iets meer vorm krijgen.

#### Bronnenlijst
Kilian Valkhof: https://webdirections.org/hover/speakers/kilian-valkhof.php
Peter Paul Koch: https://www.quirksmode.org/about/
Nils Binder: https://9elements.com/blog/author/nils-binder/
Robbert Broersma: https://www.linkedin.com/in/robbertbroersma/
Yolijn van der Kolk: https://www.gebruikercentraal.nl/gebruikersonderzoek-zo-begin-je-gewoon/
Johan Huijkman: https://media.licdn.com/dms/image/v2/D4E03AQGNr6TCw7ccgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666277475310?e=2147483647&v=beta&t=dUOV--XMVKsf4fcZTzu--HOp_-YPIOLEgOxjFwOdD6U
General foto: https://www.pinterest.com/pin/pfps--26247610322356687/

Leerdoelen: https://www.shutterstock.com/nl/image-vector/learning-goals-icon-element-design-2670889603?dd_referrer=https%3A%2F%2Fwww.google.nl%2F
Reflection: https://www.shutterstock.com/nl/image-vector/learning-goals-icon-element-design-2670889603?dd_referrer=https%3A%2F%2Fwww.google.nl%2F

### Button functionaliteiten lijst
#### NES
* Dpad-up: Pop-up
* Dpad-left: Pop-up
* Dpad-right: Pop-up
* Dpad-down: Pop-up
* Start: Github pagina
* Select: Website
* A:
* B:

#### Game and Watch
* Left: Vorige slide
* Right: Volgende slide
* Game A: Github pagina
* Game B: Website
* Time:

#### Gameboy
* Dpad-up:
* Dpad-left: Vorige slide
* Dpad-right: Volgende slide
* Dpad-down
* Start: Github
* Select: Website
* A:
* B:

#### Wii
* Dpad-up: Pop-up
* Dpad-left: Pop-up
* Dpad-right: Pop-up
* Dpad-down: Pop-up
* A: Pop-up
* Plus:
* Home:
* Minus:
* 1: Github
* 2: Website

#### DS
* Dpad-up:
* Dpad-left: Vorige slide
* Dpad-right: Volgende slide
* Dpad-down:
* X:
* Y:
* A:
* B:
* Start: Gihtub
* Select: Website

#### 3DS
* Joystick:
* Dpad-up:
* Dpad-left: Vorige slide
* Dpad-right: Volgende slide
* Dpad-down:
* Home:
* C-stick:
* X:
* Y:
* A:
* B:
* Start: Github
* Select: Website
* Volume-slider:
* 3D-slider:

#### Switch
* Minus: Verander kleur linker kant
* Left-joystick:
* Up:
* Left: Vorige button
* Right: Volgende button
* Down:
* Screenshot: Github
* Plus: Verander kleur rechter kant
* X:
* Y:
* A: Selecteer button
* B: Terug naar buttons vanaf detail
* Right joystick:
* Home: Website

#### Switch
* Minus:
* Left-joystick:
* Up:
* Left: Vorige button
* Right: Volgende button
* Down:
* Screenshot: 
* Plus:
* X:
* Y:
* A: Selecteer button
* B: Terug naar buttons vanaf detail
* Right joystick:
* Home:
* Online: