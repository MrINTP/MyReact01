import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MyMain() {

  const [isToggled, setIsToggled] = useState(true);
//  let isToggled = false;

  const btnChangeColor = () => {
    setIsToggled(!isToggled);
  }

  //js에서 다른 페이지로 넘어가는 방법!
  const navFilePage = () => {
    // window.location.href 쓰면 또 뭉탱이를 가져오기 떄문에 useNavigate를 사용한다.
    // window.location.href = "/file";

    gayJoyGo('/file');
    //게이조이고 변수는 useNavigate를 쓰며, 사용 방법은 존나 간단함.
  }

  const gayJoyGo = useNavigate();
  
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
       안녕하세요 안녕하세요 zzzz
       </p>
       <button onClick={btnChangeColor}>색상 변경</button>
       <div>
        <p>이것은 Link to로 사용했을 경우입니다.</p>
        <Link to="/file"> <button>File로 이동</button> </Link>
       </div>
       <div>
        <p>이것은 a태그 사용했을 경우(비추, 사유는 bundles.js(뭉탱이)를 계속 다운받아 비효율적임)</p>
        <a href="/file"><button>File로 이동</button> </a>
       </div>
       <div>
        {/* js에서 다른 페이지로 넘어가는 방법 적용하기 ㅋ */}
        {/* 하지만 이를 그대로 쓰면 뭉탱이를 또 가져오는 문제가 있음 해결 방법은 useNavigate를 사용함 */}
        <button onClick={navFilePage}>화살표 함수 버튼</button>
       </div>
       

      </div>
    </>
  );
}

export default MyMain;
