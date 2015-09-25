$(document).ready(function() {
//DECLARE VARIABLES
  var x = "x"
  var o = "o"
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  var ties = 0;
  var starter = 0;
  var player1 = 0;
  var player2 = 0;
  var bar = 0;


//LOAD PAGE TRIGGER - COIN FLIP POPUP


  $('#end-stage1').click(function(){
    $('#stage1').hide();
    $('#stage2').show();
  });

  $('#end-stage2').click(function(){
    if ($("input[name='player1']").val() == "") {
      alert("Enter Player 1 Username");
    } else {
      player1 = $("input[name='player1']").val();
      $("#player1Btn").html(player1);
      $('#stage2').hide();
      $('#stage3').show();
    }
  });

  $('#end-stage3').click(function(){
    if ($("input[name='player2']").val() == "") {
      alert("Enter Player 2 Username");
    } else {
      player2 = $("input[name='player2']").val();
      $("#player2Btn").html(player2);
      $('#stage3').hide();
      $('#stage4').show();
    }
  });

  //Stage 4

  $('#flip').click(flipMe);

  function flipMe(){
    var flip = ["Heads", "Tails"];
    var side = flip[Math.floor(Math.random()*flip.length)];

    if (side == "Heads"){
      $('#regTitle').html("You Got " + side);
      $(".image").html('<img src="http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_obverse.jpeg"/>');
    } else {
      $('#regTitle').html("You Got " + side);
      $(".image").html('<img src="http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_reverse.jpeg"/>');
    }

    $(this).hide();
    $('#stage5').show();

    };

    $('#player1Btn').click(function(){
      $('#shade').hide();
      $('#popup').hide();
      $('#playerScoreBoard1').html(player1);
      $('#playerScoreBoard2').html(player2);
      bar = player1;
      $('#turn').append(bar + " Starts!");
    });

    $('#player2Btn').click(function(){
      $('#shade').hide();
      $('#popup').hide();
      $('#playerScoreBoard2').html(player1);
      $('#playerScoreBoard1').html(player2);
      bar = player2;
      $('#turn').append(bar + " Starts!");
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
          alert(player1 + ' wins')
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
        }
        else if ( count == 9)
        {
          alert(player1 + "..." + player2 + "... You guys sucks...")
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
          alert(player2 + ' wins')
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
        }
        else if
          ( count == 9 )
        {
          alert("Its a tie. Restart.")
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

      if (starter === 0){
        bar = player1;
        $('#turn').text(bar + " Starts!");
      } else {
        bar = player2;
        $('#turn').text(bar + " Starts!");
      }


  });





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
