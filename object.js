//비구조화 할당 == 구조 분해
//객체나 비열을 해체하여 각강의 속성 혹은 요로 하나하나를 변수로 선언

const kane = {
  age: 10,
  mte: 3000,
  color: "green",
};

//1. 이것이 구조 할당이라고 한다.
// const age = kane.age;
// const moongtange = kane.mte;
//좀 복잡하므로 더 쉽게 바꿈

const { age: kaneAge, color: kaneColor } = kane;
//const{}를 통해 {}안에 키 값을 작성하면 객체의 구조 분해 할당 가능
//키값은 이미 만들어졌으므로 변경은 불가능하다. 별칭은 가능

// const {age : kaneAge, color} = kane
// 이렇게도 가능

//ex 1
const SignForm = (props) => {
  console.log(props);
};

SignForm({
  signFormState: "SIGN-IN",
});

//ex 2
const SignForm1 = (a) => {
  console.log(a.signFormState1);
};

SignForm1({
  signFormState1: "SIGN-IN1",
});

//쉽게 하면 이렇게
const [age, color] = [20, "red"];
const [aa, bb] = [1111199, 2];
console.log(age, color);
console.log(aa, bb);
