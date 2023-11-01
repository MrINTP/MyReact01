import React from "react";
import { useNavigate } from "react-router-dom";

const Myfile01 = () => {
  const myMsg = "get out!";
  const goMain = useNavigate();

  const goMainFuction = () => {
    goMain('/');
  }

  return (
    <div>
      {myMsg}
      <div>어쩌라고</div>
      <input type="text" id="myid-01" value={"초기화 값입네다 ㅋㅋㅋ"} />
      <div>
        <p>꺼어어어억 just scratch paper! </p>
        <h4>You are a single loser never have a gf! ㅋㅋㅋ</h4>
      </div>
      <div>
        <button onClick={goMainFuction}>메인으로 돌아가기</button>
      </div>
    </div>
  );
};

export default Myfile01;
