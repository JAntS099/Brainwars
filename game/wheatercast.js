        var score = 0; //de score
        var letters = new Array(); //declare dat letters een nieuwe array is en leeg
        var selectedRandomImage = {}; //een object om het vergelijken
        
        //als er 5 correcte score is voeg dan 4 extra plaatjes toe, laat die div zien waar die plaatjes zijn.
        function ShowDiv() {
            var x = document.getElementById("myDIV");
           
            if (score >= 5) {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        //het randomrize function
        //function om de geselecteerde div te vergelijken met de huidige foto in DivUpper.
        function randomBg() {
            var randomImageIndex = Math.floor((Math.random() * letters.length)); //haal tussen 0 en 9 uit de array eentje uit
            randomImageIndex = randomImageIndex >= 0 ? randomImageIndex : 0; //De if-else statment moet een iets laten zien.
            selectedRandomImage = letters[randomImageIndex]; //Haal de uit een gekozen object het eigenschap "image" en zet hem hieronder
            document.getElementById("DivUpper").style.backgroundImage = "url('" + letters[randomImageIndex].image + "')" //haal eigenschap  "iamge" en zet hem in het DivUpper ofwel het Div waar je een randomrize foto ziet.
        }
    
        /*probleem: De divs kunnen selecteren en dat geselecteerde div vergelijken met de huidige.
        //Oplossing 1: geef aan alle divs een id om een verscheiding hebben. en in een variavle zetten. En het roept ook de funciton compare.
        Oplossing 2: Zet de divs om in buttons met een onClickEvent. dat de button value in een variable zet en ook de function compare oproept.
        Later als het werk moeten er nog een else if condition geven voor de divs die niet mer de kleur en het figuur corresponderen*/
        
        //Dit functie zet neemt uit de button de data en stopt het in de parenthese.
        //Dit function neemt het object eigenschappen uit het array en die van de button om ze te vergelijken.
        function compare(name, color) {
            console.log(selectedRandomImage);
            //de randomrize MOET een object halen uit de array. Anders gaat ie niet werken.
        if (selectedRandomImage !== undefined) {
            if (selectedRandomImage.name === name && selectedRandomImage.color === color) {
            //Als het juist is dat komt er een punt bij en wordt er een nieuwe foto in de DivUpper gezet.
                score++;
                console.log(score);
                document.getElementById("lblscore").innerHTML = score;
                console.log("check1");
                randomBg();
            }
            //Als de foto niet erin staat moet het niet hetzelfde kleur en icoontje hebben.
            else if (selectedRandomImage.name !== name && selectedRandomImage.color !== color && !selectedRandomImage.isLowerCard) {
                score++;
                console.log(score);
                document.getElementById("lblscore").innerHTML = score;
                 console.log("check2");
                randomBg();
            
            } else {
                //dit is de fout melding
                console.log(score);
                console.log("Verkeerde kaart gekozen!");
                randomBg();
            } 
            //wanneer de score 5 (5 correcte antwoorden) komen er meer afbeeldingen in het spel.
            if (score >= 5){
            // console.log("5 correctie");
            createCardsForScoreGreaterThan5();
            ShowDiv(); /*de div met 4 meer afbeeldingen, hieronder worden 16 nieuwe afbeeldingen in de array toegevoegd, 4 x 4 = 16*/
            }
        }
    }
        //roept aan het begin om kaarten aan te maken voor de randomize afbeelding
        function createCards(gametype) {
           
            if(gametype === 'wedstrijd'){
                startTime();
            }
            
        //gemaakte objecten met hun eigenschappen
        
        var letterWaterDruppelBlauw = {
            name: "waterdruppel",
            color: "blauw",
            image: "images/blauw_waterdrupel.png",
            isLowerCard: true
        }
         var letterWolkGrijs = {
            name: "wolk",
            color: "grijs",
            image: "images/grijz_wolk.png",
            isLowerCard: true
        }
         var letterZonGeel = {
            name: "zon",
            color: "geel",
            image: "images/gele_zon.png",
            isLowerCard: true
        }
         var letterWaterDruppelGrijs = {
            name: "waterdruppel",
            color: "grijs",
            image: "images/grijz_waterdrupel.png",
            isLowerCard: false
        }
         var letterWolkGeel = {
            name: "wolk",
            color: "geel",
            image: "images/gele_wolk.png",
            isLowerCard: false
        }
         var letterZonBlauw = {
            name: "zon",
            color: "blauw",
            image: "images/blauw_zon.png",
            isLowerCard: false
        }
         var letterWaterDruppelGeel = {
            name: "waterdruppel",
            color: "geel",
            image: "images/gele_waterdrupel.png",
            isLowerCard: false
        }
        var letterWolkBlauw = {
            name: "wolk",
            color: "blauw",
            image: "images/blauw_wolk.png",
            isLowerCard: false
        }
        var letterZonGrijs = {
            name: "zon",
            color: "grijs",
            image: "images/grijz_zon.png",
            isLowerCard: false
        }
       
            //randomrize de foto en display het in DivUpper.
            //dit is meer dynamisch dan een static array en hiermee heb ik meer controle over de foto's die in het array komen te staan.
            letters.push(letterWolkBlauw);
            letters.push(letterWolkGeel);
            letters.push(letterWolkGrijs);
            letters.push(letterZonBlauw);
            letters.push(letterZonGeel);
            letters.push(letterZonGrijs);
            letters.push(letterWaterDruppelBlauw);
            letters.push(letterWaterDruppelGeel);
            letters.push(letterWaterDruppelGrijs);
            
            //oude array list 
            // letters = [
            //      letterABlue,    //0
            //      letterABlack,   //1
            //      letterAOrange,  //2
            //      letterBBlack,   //3
            //      letterBBlue,    //4
            //      letterBOrange,  //5
            //      letterCBlue,    //6
            //      letterCBlack,   //7
            //      letterCOrange   //8
            // ];
            //begin met roept de randomrize function op
            ShowDiv();
            randomBg();
    }
    
    /*
      Maak extra kaarten als de score groter of gelijk is aan 5
      -  maak eerst de kaarten aan
      - voeg vervolgens daarna de kaarten toe in de kaarten array.
      
    */
    function createCardsForScoreGreaterThan5(){
         var letterBoomGroen = {
            name: "boom",
            color: "groen",
            image: "images/groene_boom.png",
            isLowerCard: true
        }
        var letterBladBruin = {
            name: "blad",
            color: "bruin",
            image: "images/bruine_blad.png",
            isLowerCard: true
        }
        var letterHartRood = {
            name: "hart",
            color: "rood",
            image: "images/rood_hart.png",
            isLowerCard: true
        }
        var letterHuisOranje = {
            name: "huis",
            color: "oranje",
            image: "images/oranje_huis.png",
            isLowerCard: true
        }
        var letterBladGroen = {
            name: "blad",
            color: "groen",
            image: "images/groene_blad.png",
            isLowerCard: false
        }
        
        var letterHuisRood = {
            name: "huis",
            color: "rood",
            image: "images/rood_huis.png",
            isLowerCard: false
        }
        
        var letterBoomRood = {
            name: "boom",
            color: "rood",
            image: "images/rood_boom.png",
            isLowerCard: false
        }
        
        var letterBladRood = {
            name: "blad",
            color: "rood",
            image: "images/rood_blad.png",
            isLowerCard: false
        }
        
        var letterHartOranje = {
            name: "hart",
            color: "oranje",
            image: "images/oranje_hart.png",
            isLowerCard: false
        }
        
        var letterBoomOranje = {
            name: "boom",
            color: "oranje",
            image: "images/oranje_boom.png",
            isLowerCard: false
        }
        
        var letterBladOranje = {
            name: "blad",
            color: "oranje",
            image: "images/oranje_blad.png",
            isLowerCard: false
        }
          var letterHartGroen = {
            name: "hart",
            color: "groen",
            image: "images/groene_hart.png",
            isLowerCard: false
        }
          var letterHuisGroen = {
            name: "huis",
            color: "groen",
            image: "images/groene_huis.png",
            isLowerCard: false
        }
        
           var letterHuisBruin = {
            name: "huis",
            color: "bruin",
            image: "images/bruine_huis.png",
            isLowerCard: false
        }
           var letterHartBruin = {
            name: "hart",
            color: "bruin",
            image: "images/bruine_hart.png",
            isLowerCard: false
        }
           var letterBoomBruin = {
            name: "boom",
            color: "bruin",
            image: "images/bruine_boom.png",
            isLowerCard: false
        }
        
        letters.push(letterHuisRood);
        letters.push(letterHartRood);
        letters.push(letterBoomRood);
        letters.push(letterBladRood);
        letters.push(letterHuisOranje);
        letters.push(letterHartOranje);
        letters.push(letterBoomOranje);
        letters.push(letterBladOranje);
        letters.push(letterHartGroen);
        letters.push(letterBoomGroen);
        letters.push(letterBladGroen);
        letters.push(letterHuisGroen);
        letters.push(letterHuisBruin);
        letters.push(letterHartBruin);
        letters.push(letterBoomBruin);
        letters.push(letterBladBruin);
    }
    
    function startTime() {
        var timeleft = 30;
        var downloadTimer = setInterval(function(){
            document.getElementById("progressBar").value = 30 - --timeleft;
            if(timeleft <= 0)
            {   
                clearInterval(downloadTimer);
                alert("Tijd is om, jouw score is: " + score )
                
            }
            
        }, 1000);
    }