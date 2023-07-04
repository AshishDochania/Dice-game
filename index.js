var one=Math.random();
var two=Math.random();
one=one*6;
two=two*6;
one=Math.floor(one);
two=Math.floor(two);

var li="./images/dice"+(one+1)+".png";
var li2="./images/dice"+(two+1)+".png"
document.querySelector(".img1").setAttribute("src",li);
document.querySelector(".img2").setAttribute("src",li2);


if(one>two){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(two>one){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML="Tie it is";
}