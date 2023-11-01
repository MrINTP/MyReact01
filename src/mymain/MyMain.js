import React, { useState } from "react";

function MyMain() {

  const [isToggled, setIsToggled] = useState(true);
//  let isToggled = false;

  const btnChangeColor = () => {
    setIsToggled(!isToggled);
  }
  
  return (
    <>
      <div>
        <div>
          <h2>Main</h2>
        </div>
        <div>
          <p>나는 나는 메인입니다. 흐헤헤</p>
        </div>
       {/* 스타일 style (변수 사용을 위함){(스타일 객체) {}객체} => 암튼 중괄호를 두번 써야함*/}
       {/* 자바스크립트의 변수값으로만 DOM을 제어할 수 있음. 이에 접근 최소화를 할 수 있다. 리엑트에서는 지양한다. */}
       <p style={{color: isToggled ? "blue" : "red"}} >
       안녕하세요 안녕하세요
       </p>
       <button onClick={btnChangeColor}>색상 변경</button>

      </div>
    </>
  );
}

export default MyMain;
