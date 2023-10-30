const count = 0;

//화살표 함수로 했을 때
//Use an arrow function
const saying = (inputCount) => {
  const myMsg01 = "님은 GF를 " + inputCount + "번 사귀었습니다.";
  let myMsg02;
  if (inputCount === 0) {
    myMsg02 = "\nㅋㅋㅋ You are a shitty single loser!";
  } else if (inputCount > 1) {
    myMsg02 =
      "\nCan't believe that you have " + inputCount + " GF(s)! You are a liar!";
  } else {
    myMsg02 = "\nYou got a wrong input data! Get the f**k off!";
    return console.log(myMsg02);
  }
  return console.log(myMsg01 + myMsg02);
};

saying(count);

//일반 함수로 했을 때
//Use a general function

//Paused!
function speaking(inputCount) {
  const myMsg01 = "";
}
