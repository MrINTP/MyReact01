import { tab } from "@testing-library/user-event/dist/tab";
import styled from "styled-components";

let isSignFormState = false;
const tapAarray = [
    {
        title: "SIGN-IN",
        isSelected: isSignFormState === "SIGN-IN",
    },
    {
        title: "SIGN-UP",
        isSelected: isSignFormState === "SIGN-UP",
    }
]

//확장팩에서, vscode styled component 설치 필요
const SubMyMain = () => {
    return (
        <div>
            <p>안녕</p>
            <Wrapper>
                <Container>
                    <Header>
                        {tapAarray.map((tabElement) => (
                            <Tab isSelected={tab.isSelected} onClick={onClickTab(tab.title)}>
                                {tabElement.title}
                            </Tab>
                        ))
                        }

                    </Header>
                    {isSignFormState = "SIGN-IN" ? <div>SIGN-IN</div> : <div>SIGN-UP</div>}
                </Container>
            </Wrapper>
        </div>
    );

}

const onClickTab = (title) => {
    isSignFormState = title;
}

//이러한 styled 컴포넌트는 반드시 앞에 대문자 필수
const Wrapper = styled.div`
    width:100%;
    height:calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const Container = styled.h1`
    width: 360px;
    /* color: red;
    font-size: 32px;
    font-weight:bold; */
`;

const Header = styled.header`
    background-color: skyblue;
    display: flex;

    
    /* & > div {
        width: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: #e0e0e0;
        }
    } */
`;

const Tab = styled.div`
    width:50%;
    cursor: pointer;
    //js 쓰기 위한 $와 {} 사용
    //콜백함수를 쓰지 ㅋㅋ
    background-color: ${ (a) => a.isSelected ? '#000000' : 'pink'};

    &:hover{
        background-color: #e0e0e0;
    }
`;

export default SubMyMain;