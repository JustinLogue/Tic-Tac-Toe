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

};

app.clicked = () => {

    var turn = 1;

    console.log("clicked!")
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
                // var n = "x";
                winChecker("X");
                console.log(gameBoard)
            }
            else{
                html1='<h2>O</h2>';
                gameBoard[location] = "O"
                turn += 1;
                $(this).append(html1);
                // var n = "O";
                winChecker("O");
                console.log(gameBoard)
            }


        }


    })
};


function winChecker(n){
    if(gameBoard[1] == n && gameBoard[2] == n && gameBoard[3] == n){
        console.log(n," Wins");
    }

    else if(gameBoard[4] == n && gameBoard[5] == n && gameBoard[6] == n){
        console.log(n," Wins");
    }

    else if(gameBoard[7] == n && gameBoard[8] == n && gameBoard[9] == n){
        console.log(n," Wins");
    }

    else if(gameBoard[1] == n && gameBoard[4] == n && gameBoard[7] == n){
        console.log(n," Wins");
    }
    else if(gameBoard[2] == n && gameBoard[5] == n && gameBoard[8] == n){
        console.log(n," Wins");
    }
    else if(gameBoard[3] == n && gameBoard[6] == n && gameBoard[9] == n){
        console.log(n," Wins");
    }

    else if(gameBoard[1] == n && gameBoard[5] == n && gameBoard[9] == n){
        console.log(n," Wins");
    }

    else if(gameBoard[3] == n && gameBoard[5] == n && gameBoard[7] == n){
        console.log(n," Wins");
    }
}