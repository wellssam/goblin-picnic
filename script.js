$(function(){  //doc ready

    // When the page loads:

    // Create a goblin object with a name property and a pronouns property, as well as properties for the other randomized story elements
    let goblin = {
        name: undefined,
        pronouns: undefined,
        game: undefined,
        place: undefined,
        takeOut: undefined,
        forgottenItem: undefined,
        movie: undefined
    };
    // Create a scores object with three properties: Rivalry, Romance, Rapport, and assign 0 to all of them.
    let scores = {
        rivalry : 0,
        romance : 0,
        rapport : 0,
    };


    // randomly assign the Goblin object a name and pronouns.
    
        // create two arrays: a list of goblin names and a list of possible pronouns.
    const goblinNames = [`Pulx`, `Cruft`, `Scamper`, `Rumple`, `Wrah`, `Eek`];
    const goblinPronouns = [`they/them`, `she/her`, `he/him`];
        // create a fantasy city name array, a board game array, a takeout array, a movie array, and a forgotten item array so those aspects of the story can be randomized too:
    const boardGameList = ['Clue', 'Risk', 'Settlers of Catan', 'Codenames', 'Ticket to Ride', 'Bananagrams'];
    const fantasyPlaceList =['Wildebreach', 'Grayshield', 'Feyguarde', 'Cloudacre', 'Ghostcall','Mudmoor'];
    const takeoutList = ['calzones', 'pizza', 'Thai', 'ramen', 'Korean barbecue', 'burgers'];
    const forgottenItemList =['hairdryer', 'phone charger', 'headphones', 'hat', 'scarf', 'book'];
    const movieList = ['Legally Blonde', 'Aliens', 'Star Wars', 'When Harry Met Sally', 'Moonstruck', 'Twilight']

    // hide all children of the wrapper, then remove the "startHidden" class (this is to prevent pop-in on load, while still letting me use the fadeIn and fadeOut methods)
    $('.wrapper>*').hide()

    $('.wrapper').removeClass('startHidden')


    // Show the title and the start button.
    function showStart(){
        $('h1 ,  button#start-button, footer').fadeIn()
    }
    showStart()
    // create a function that, when called, returns a random goblin name from the list
    function randomListItem(list) {
        // randomly select an integer between 0 and 5 and assign to variable n
        let n = Math.floor(Math.random() * 6);
        // return nameList[n]
        return list[n];
    }

    // set goblin.name to be equal to randomGoblinName(goblinNames)
    goblin.name = randomListItem(goblinNames);
    // set the other properties of the goblin object with that function;
    goblin.game = randomListItem(boardGameList);
    goblin.place = randomListItem(fantasyPlaceList);
    goblin.takeOut = randomListItem(takeoutList);
    goblin.forgottenItem = randomListItem(forgottenItemList);
    goblin.movie = randomListItem(movieList);

    // create a function that, when called, returns a random set of pronouns
    function randomPronouns(pronounList) {
        let n = Math.floor(Math.random() * 3);
        return pronounList[n];
    }

    // set goblin.pronouns to randomPronouns(goblinPronouns)
    goblin.pronouns = randomPronouns(goblinPronouns);

    // Change all instances of the Goblin's name, pronouns and the other random elements to match those assigned to the Goblin object. 
    // create and call a function that changes all the random names in the text to match the name in the goblin object
    function changeNames(){
        $('span.goblin-name').text(goblin.name);
        $('span.place').text(goblin.place);
        $('span.takeout').text(goblin.takeOut);
        $('span.movie').text(goblin.movie);
        $('span.board-game').text(goblin.game);
        $('span.item').text(goblin.forgottenItem);
    }
    changeNames()

    // create and call a function that checks the goblin's pronouns.
    function changePronouns() {
        // If the goblin goes by he/him pronouns, update all personal pronouns to "he" and all possessive pronouns to "his". 
        if (goblin.pronouns === "he/him") {
            $('span.personal-pronoun').text("he");
            $('span.possessive-pronoun').text("his");
            // If the goblin goes by she/her pronouns, update all personal pronouns to "she" and all possessive pronouns to "her".
        } else if(goblin.pronouns === "she/her"){
            $('span.personal-pronoun').text("she");
            $('span.possessive-pronoun').text("her")
            // If the goblin goes by they/them pronouns, update all personal pronouns to "they" and possessive pronouns to "their" 
            // If the Goblin's pronouns are they/them, remove all text currently inside the the verb-tense span classes
        } else if(goblin.pronouns === "they/them") {
            $('span.personal-pronoun').text("they");
            $('span.possessive-pronoun').text("their")
            $('span.verb-tense').text("")
        }            
    }

    changePronouns()

    // PRESS START
    // on Start hide the start game button, and show intro-part-1 and continue-button-intro-1.
    
    $('#start-button').on('click', function(){
             // hide the title and start button
            $('button#start-button').hide()
            // fade in intro-part-1
            $('.page-1, div.counters, img#brook-pic').fadeIn()
    })


    // INTRO CODE

    // When the player clicks continue-button-intro-1, hide intro-part-1 and continue-button-intro-1 show intro-part-2 and continue-button-intro-2

    $('button#continue-button-intro-1').on('click', function(){
        // hide previous page
       $('.page-1').hide()
       // fade in next page
       $('.page-2').fadeIn()
    })


    // SCENE 1 CODE

    // When player clicks continue-button-intro-2, hide intro-part-2 and continue-button-intro-2 and show scene-1-setup and player reactions for the scene.

    $('button#continue-button-intro-2').on('click', function(){
        // hide previous page
       $('.page-2').hide()
       // fade in next page
       $('.page-3').fadeIn()
    })

    // When the player selects a reaction, display the appropriate resolution for the scene and the next continue button, as well as increase the appropriate score property by 1, and update the onscreen score counters.

    // create a function to update all on-screen score counters
    function updateCounters(){
        $('span#rivalry-counter').text(scores.rivalry);
        $('span#romance-counter').text(scores.romance);
        $('span#rapport-counter').text(scores.rapport)
    }

    $('li#fight-reaction-1').on('click', function(){
        $('.page-3 , p#flirt-resolution-1 , p#friend-resolution-1').hide()
        $('.page-4 , p#fight-resolution-1').fadeIn()
        scores.rivalry++
        updateCounters()
        console.log(scores.rivalry)
    })

    $('li#flirt-reaction-1').on('click', function(){
        $('.page-3 , p#fight-resolution-1 , p#friend-resolution-1').hide()
        $('.page-4 , p#flirt-resolution-1').fadeIn()
        scores.romance++
        updateCounters()
        console.log(scores.romance)
    })

    $('li#friend-reaction-1').on('click', function(){
        $('.page-3 , p#flirt-resolution-1 , p#fight-resolution-1').hide()
        $('.page-4 , p#friend-resolution-1').fadeIn()
        scores.rapport++
        updateCounters()
        console.log(scores.rapport)
    })

    // When the player clicks the next continue button, show the setup for the next scene.  

    $('button#continue-button-scene-1').on('click', function(){
        // hide previous page
       $('.page-4').hide()
       // fade in next page
       $('.page-5').fadeIn()
    })


    // SCENE 2 CODE
    // When the player selects a reaction, display the appropriate resolution for the scene and the next continue button, as well as increase the appropriate score property by 1, and update the onscreen score counters.

    $('li#fight-reaction-2').on('click', function(){
        $('.page-5 , p#flirt-resolution-2 , p#friend-resolution-2').hide()
        $('.page-6 , p#fight-resolution-2').fadeIn()
        scores.rivalry++
        updateCounters()
        console.log(scores.rivalry)
    })

    $('li#flirt-reaction-2').on('click', function(){
        $('.page-5 , p#fight-resolution-2 , p#friend-resolution-2').hide()
        $('.page-6 , p#flirt-resolution-2').fadeIn()
        scores.romance++
        updateCounters()
        console.log(scores.romance)
    })

    $('li#friend-reaction-2').on('click', function(){
        $('.page-5 , p#flirt-resolution-2 , p#fight-resolution-2').hide()
        $('.page-6 , p#friend-resolution-2').fadeIn()
        scores.rapport++
        updateCounters()
        console.log(scores.rapport)
    })

    // When the player clicks the continue button, show the setup for the next scene.  

    $('button#continue-button-scene-2').on('click', function(){
        // hide previous page
       $('.page-6').hide()
       // fade in next page
       $('.page-7').fadeIn()
    })
 


    // SCENE 3 CODE 

    // When the player selects a reaction, display the appropriate resolution for the scene and the next continue button, as well as increase the appropriate score property by 1, and update the onscreen score counters.

    $('li#fight-reaction-3').on('click', function(){
        $('.page-7 , p#flirt-resolution-3 , p#friend-resolution-3').hide()
        $('.page-8 , p#fight-resolution-3').fadeIn()
        scores.rivalry++
        updateCounters()
        console.log(scores.rivalry)
    })

    $('li#flirt-reaction-3').on('click', function(){
        $('.page-7 , p#fight-resolution-3 , p#friend-resolution-3').hide()
        $('.page-8 , p#flirt-resolution-3').fadeIn()
        scores.romance++
        updateCounters()
        console.log(scores.romance)
    })

    $('li#friend-reaction-3').on('click', function(){
        $('.page-7 , p#flirt-resolution-3 , p#fight-resolution-3').hide()
        $('.page-8 , p#friend-resolution-3').fadeIn()
        scores.rapport++
        updateCounters()
        console.log(scores.rapport)
    })

    // When the player clicks the continue button, show the setup for the next scene.  

    $('button#continue-button-scene-3').on('click', function(){
        // hide previous page
       $('.page-8').hide()
       // fade in next page
       $('.page-9').fadeIn()
    })



    // SCENE 4 CODE

    // When the player selects a reaction, display the appropriate resolution for the scene and the next continue button, as well as increase the appropriate score property by 1, and update the onscreen score counters.

    $('li#fight-reaction-4').on('click', function(){
        $('.page-9 , p#flirt-resolution-4 , p#friend-resolution-4').hide()
        $('.page-10 , p#fight-resolution-4').fadeIn()
        scores.rivalry++
        updateCounters()
        console.log(scores.rivalry)
    })

    $('li#flirt-reaction-4').on('click', function(){
        $('.page-9 , p#fight-resolution-4 , p#friend-resolution-4').hide()
        $('.page-10 , p#flirt-resolution-4').fadeIn()
        scores.romance++
        updateCounters()
        console.log(scores.romance)
    })

    $('li#friend-reaction-4').on('click', function(){
        $('.page-9 , p#flirt-resolution-4 , p#fight-resolution-4').hide()
        $('.page-10 , p#friend-resolution-4').fadeIn()
        scores.rapport++
        updateCounters()
        console.log(scores.rapport)
    })


    // THE END

    // When the player clicks the FINAL continue button:



    $('button#continue-button-scene-4').on('click', function(){
        // hide previous page
       $('.page-10 , .ending, .choose-ending').hide()
       // fade in next page
       $('.page-11').fadeIn()
    
    // check the players final scores
    // check if no single score is higher than both of the others:

    // Display an ending based on the highest score


       if(scores.rivalry > scores.romance && scores.rivalry > scores.rapport){
           $('p#fight-ending').fadeIn();
       } else if(scores.romance > scores.rivalry && scores.romance > scores.rapport){
           $('p#flirt-ending').fadeIn();
       } else if(scores.rapport > scores.rivalry && scores.rapport > scores.romance){
           $('p#friend-ending').fadeIn();
       } else{ 
        $('button#continue-button-ending').hide()
        $('.choose-ending').fadeIn();
        }
    })

    $('li#choose-ending-fight').on('click', function(){
        $('.choose-ending').hide()
        $("p#fight-ending , button#continue-button-ending").fadeIn()
        console.log('the button has been clicked')
    })

    $('li#choose-ending-flirt').on('click', function(){
        $('.choose-ending').hide()
        $("p#flirt-ending , button#continue-button-ending").fadeIn()
    })

    $('li#choose-ending-friend').on('click', function(){
        $('.choose-ending').hide()
        $("p#friend-ending , button#continue-button-ending").fadeIn()
    })


    // When the player clicks the The End button
    $('button#continue-button-ending').on('click', function(){
        // Display thank-you splash page
        // Display Play again button.
        $('.page-11').hide();
        $('.page-12').fadeIn();
    })

    // When a player clicks the play-again button
    $('button#play-again').on('click',function(){
    // Refresh the page
        location.reload()
    })


}) //end of doc ready
