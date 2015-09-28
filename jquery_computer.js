$(document).ready(function() {
//DECLARE VARIABLES
  var x = "x"
  var o = "o"
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  var ties = 0;
  var starter = 0;
  var turn ="Player 1 starts";

  $('#turn').text(turn);

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
          alert('O wins')
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

       else
       {
        computer();
      }
    }

        if (starter == 0){
          $('#turn').text("Player 1 Starts");
        } else {
          $('#turn').text("Computer Starts");
        }

  });




//  Computer's turn
function computer() {
  count++
  // COMPUTER SELECT A SQUARE
  var options = ["#one","#two","#three","#four","#five","#six","#seven","#eight","#nine"];
  var computerSel;

  function selection() {
    do {
        computerSel = options[Math.floor(Math.random()*options.length)];
    } while ($(computerSel).hasClass('disable'));
  }

      selection();

    $(computerSel).text(x)
    $(computerSel).addClass('disable x btn-info')
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
      alert('X wins')
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
      computer();
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


    if (starter == 0) {
      $('#turn').text("Player 1 Starts");
    } else {
      $('#turn').text("Computer Starts");
    }



} //end of X's turn



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
