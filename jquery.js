$(document).ready(function() {
//DECLARE VARIABLES
  var x = "x"
  var o = "o"
  var count = 0; //counts click, so a stalemate can be assessed
  var o_win = 0; //tracks # of O or player1 wins
  var x_win = 0; //tracks # of X or player2 wins
  var ties = 0; //tracks # of stalemates
  var starter = 0; //tracks who's turn it is for each click
  var player1 = 0; //player1 name
  var player2 = 0; //player2 name
  var bar; //tracks who starts each game, populates #turn
  var bar2;


//LOAD PAGE TRIGGER - COIN FLIP POPUP


  $('#end-stage1').click(function(){
    $('#stage1').hide(); //hides coverpage
    $('#stage2').show(); //requires player 1 name
  });

  $('#end-stage2').click(function(){
    if ($("input[name='player1']").val() == "") {
      alert("Enter Player 1 Username"); //requires input for player1 name
    } else {
      player1 = $("input[name='player1']").val(); //assigns input to player1 var
      $("#player1Btn").html(player1); //populates player1Btn w/ player1 var
      $('#stage2').hide(); //hides enter player 1 name screen
      $('#stage3').show(); //shows enter player 2 name screen
    }
  });

  $('#end-stage3').click(function(){
    if ($("input[name='player2']").val() == "") {
      alert("Enter Player 2 Username"); //requires input for player2 name
    } else {
      player2 = $("input[name='player2']").val(); //assigns input to player2 var
      $("#player2Btn").html(player2); //populates player1Btn w/ player2 var
      $('#stage3').hide(); //hides enter player 2 name screen
      $('#stage4').show(); //shows flip screen
    }
  });

  //Stage 4

  $('#flip').click(flipMe); ///runs coin flip function when flip button is clicked

  function flipMe(){
    var flip = ["Heads", "Tails"];
    var side = flip[Math.floor(Math.random()*flip.length)]; //randomly selects heads or tails

    if (side == "Heads"){
      $('#regTitle').html("You Got " + side);
      $(".image").html('<img src="http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_obverse.jpeg"/>');
    } else {
      $('#regTitle').html("You Got " + side);
      $(".image").html('<img src="http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_reverse.jpeg"/>');
    }

    $(this).hide();
    $('#stage5').show(); //shows who is first screen

    };

    $('#player1Btn').click(function(){ //assigns player 1 as starter
      $('#shade').hide();
      $('#popup').hide();
      $('#playerScoreBoard1').html(player1);
      $('#playerScoreBoard2').html(player2);
      bar = player1;
      bar2 = player2;
      $('#turn').text(bar + " Goes First!");

    });

    $('#player2Btn').click(function(){
      $('#shade').hide();
      $('#popup').hide();
      $('#playerScoreBoard2').html(player1);
      $('#playerScoreBoard1').html(player2);
      bar = player2;
      bar2 = player1;
      $('#turn').text(bar + " Goes First!");

    });





//BEGIN GAME CLICK EVENT HANDLER
  $('#game li').click(function() {
   if
//prevents the user for re-selecting the same square
      ($(this).hasClass('disable')) {
      alert("Already selected")
    }
    else if
//defines who turn it is. Even for o's turn and odd for x's turn
      ( count%2 == starter ) {
      count++
      $(this).text(o);
      $(this).addClass('disable o btn-primary')

//checking for o's turn
      if
        ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o')
        || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o')
        || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o')
        || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o')
        || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o')
        || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o')
        || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o')
        || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
        {
          alert(bar + ' wins')
          count = 0
          starter = 0
          o_win++
          $('#o_win').text(o_win)
          $("#game li").text("+");
          $("#game li").removeClass('disable')
          $("#game li").removeClass('o')
          $("#game li").removeClass('x')
          $("#game li").removeClass('btn-primary')
          $("#game li").removeClass('btn-info')
          $('#turn').text(bar + " Starts!");
        }
        else if ( count == 9)
        {
          alert(player1 + "..." + player2 + "... You guys suck...")
          count = 0;
          ties++
          $('#ties').text(ties)
          $("#game li").text("+");
          $("#game li").removeClass('disable')
          $("#game li").removeClass('o')
          $("#game li").removeClass('x')
          $("#game li").removeClass('btn-primary')
          $("#game li").removeClass('btn-info')
        }

      } //end of O's turn


//checking for X's turn
       else {
        count++
        $(this).text(x)
        $(this).addClass('disable x btn-info')
        if
        ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x')
        || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x')
        || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x')
        || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x')
        || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x')
        || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x')
        || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x')
        || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
        {
          alert(bar2 + ' wins')
          count = 0
          starter = 1
          x_win++
          $('#x_win').text(x_win)
          $("#game li").text("+");
          $("#game li").removeClass('disable')
          $("#game li").removeClass('o')
          $("#game li").removeClass('x')
          $("#game li").removeClass('btn-primary')
          $("#game li").removeClass('btn-info')
          $('#turn').text(bar2 + " Starts!");
        }
        else if
          ( count == 9 )
        {
          alert(player1 + "..." + player2 + "... You guys suck...")
          count = 0;
          ties++
          $('#ties').text(ties)
          $("#game li").text("+");
          $("#game li").removeClass('disable')
          $("#game li").removeClass('o')
          $("#game li").removeClass('x')
          $("#game li").removeClass('btn-primary')
          $("#game li").removeClass('btn-info')



        }
      } //end of X's turn



  });

  if (starter == 0){
    bar = player1;
    $('#turn').text(bar + " Starts!");
  } else {
    bar = player2;
    $('#turn').text(bar + " Starts!");
  }





// THIS IS THE RESET BUTTON CLICK EVENT
    $("#reset").click(function() {
       $("#game li").text("+");
       $("#game li").removeClass('disable')
       $("#game li").removeClass('o')
       $("#game li").removeClass('x')
       $("#game li").removeClass('btn-primary')
       $("#game li").removeClass('btn-info')
       count = 0
  });

// END DOCUMENT READY
});
