import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const MyToDo = () => {

    //URL 파라미터 사용법
    const myParam = useParams();
    const youInput = myParam.todoID;

    //Qeuery String 사용법
    const [params, setparams] = useSearchParams();
    const youParams = params.get('page');
    const youColor = params.get('color');

    //main으로 돌아가기
    const goMain = useNavigate();
    const f_goMain = () => {
        goMain('/');
    }

    console.log(myParam.todoID);
    return(
        <>
        <div>
            <div>
                <p>안녕 안합니다. 여기는 ToDo 페이지입니다. 흐헤헤! 아이고난! 타지리리님 11수판 해요</p>
            </div>
            <div>
                <p>너님이 입력한 것 URL 파라미터 : "<span style={{color:"red"}}>{youInput}</span>"</p>
            </div>
            <div>
                <p>너님이 입력한 것 Qeuery String(page) : "<span style={{color:"red"}}>{youParams}</span>"</p>
            </div>
            <div>
                <p>너님이 입력한 것 Qeuery String(color ) : "<span style={{color:"red"}}>{youColor}</span>"</p>
            </div>
            <p>URL 파라미터 쓰려면 todo/ang 쓰면 됨</p>
            <p>Qeuery String 쓰려면 todo/ang?에 물음표 쓰고(ang 아니여도 됨), page=1 하면 page에 1 나옴,
                그리고 color도 하려면 &&color=red 이렇게 하면 됨
            </p>
            <p>npm install styled-component</p>
            <div>
                <p>메인으로 돌아가는 나</p>
                <button onClick={f_goMain}>뷁뷁</button>
            </div>
            
        </div>
        </>
    );
}

export default MyToDo;
