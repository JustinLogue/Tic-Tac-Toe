const app={};

var gameBoard ={
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
    6 : "",
    7 : "",
    8 : "",
    9 : "",
}

$(function(){
    app.innit();
    
})

app.innit = () => {
    app.clicked();
    app.Reset();
    var turn;

};

app.clicked = () => {

    turn = 1;

    // console.log("clicked!")
    $(".place").on('click', function(){

        // var location2 = document.getElementById(this);
        // console.log(location2)

        var location =$(this).removeClass("place").attr("class");
        $(this).addClass("place");


        if(gameBoard[location] == ""){
            if( turn % 2 == 0){
                html1='<h2>X</h2>';
                gameBoard[location] = "X"
                turn += 1;
                $(this).append(html1);
                $("#turnOrder").empty();
                var html2 = `<h2>It is O's turn!</h2>`
                $("#turnOrder").append(html2);

                // var n = "x";
                winChecker("X");
                // console.log(gameBoard)
            }
            else{
                html1='<h2>O</h2>';
                gameBoard[location] = "O"
                turn += 1;
                $(this).append(html1);
                $("#turnOrder").empty();
                var html2 = `<h2>It is X's turn!</h2>`
                $("#turnOrder").append(html2);

                // var n = "O";
                winChecker("O");
                // console.log(gameBoard)
            }


        }


    })
};


function winChecker(n){
    if(gameBoard[1] == n && gameBoard[2] == n && gameBoard[3] == n){
        console.log(n," Wins");
        winner(n);
        winHighlight(1, 2, 3)
    }

    else if(gameBoard[4] == n && gameBoard[5] == n && gameBoard[6] == n){
        console.log(n," Wins");
        winner(n);
        winHighlight(4, 5, 6)
    }

    else if(gameBoard[7] == n && gameBoard[8] == n && gameBoard[9] == n){
        console.log(n," Wins");
        winner(n);
        winHighlight(7, 8, 9)
    }

    else if(gameBoard[1] == n && gameBoard[4] == n && gameBoard[7] == n){
        console.log(n," Wins");
        winner(n);
        winHighlight(1, 4, 7)
    }
    else if(gameBoard[2] == n && gameBoard[5] == n && gameBoard[8] == n){
        console.log(n," Wins");
         winner(n);
         winHighlight(2, 5, 8)
    }
    else if(gameBoard[3] == n && gameBoard[6] == n && gameBoard[9] == n){
        console.log(n," Wins");
        winner(n);
        winHighlight(3, 6, 9)
    }

    else if(gameBoard[1] == n && gameBoard[5] == n && gameBoard[9] == n){
        console.log(n," Wins");
        winner(n);
        winHighlight(1, 5, 9)
    }

    else if(gameBoard[3] == n && gameBoard[5] == n && gameBoard[7] == n){
        console.log(n," Wins");
        winHighlight(3, 5, 7)
    }
}

function winner(n){
    var html1 = `<h2>${n} Wins the Game!</h2>`
    $("#WinnerArea").append(html1);
    console.log("winner function")
    document.getElementById("resetButton").style.display="inline-block";

}


function winHighlight(A, B, C){
    document.getElementById(A).style.backgroundColor="green"
    document.getElementById(B).style.backgroundColor="green"
    document.getElementById(C).style.backgroundColor="green"
    document.getElementById(A).style.color="white"
    document.getElementById(B).style.color="white"
    document.getElementById(C).style.color="white"
}

app.Reset = () => {
    console.log("Reset button active")
    $("#resetButton").on('click', function(){

        console.log("reset clicked!")

        for(let i = 1; i < 10; i++){
            document.getElementById(i).style.backgroundColor="cyan";
            document.getElementById(i).style.color="black";
            gameBoard[i] = "";
            document.getElementById(i).innerHTML = "";
    }

    $("#WinnerArea").empty();
    document.getElementById("resetButton").style.display="none";
    console.log(gameBoard)
    turn = 1;
    })


}