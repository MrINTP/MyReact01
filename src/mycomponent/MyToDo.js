import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const MyToDo = () => {

    //URL 파라미터 사용법
    const myParam = useParams();
    const youInput = myParam.todoID;

    //Qeuery String 사용법
    const [params, setparams] = useSearchParams();
    const youParams = params.get('page');

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
                <p>너님이 입력한 것 Qeuery String : "<span style={{color:"red"}}>{youParams}</span>"</p>
            </div>
            
        </div>
        </>
    );
}

export default MyToDo;
