import styled from "styled-components";
import { flexCenter } from "../../styles/common";

//...이란 : 깊은 복사, 완벽한 복사는 아니다.
const FormInput = ({ label, containerStyle, ...inputProps }) => {
  //함수 인자에 ...이 있다면, 나머지 모든 매개변수  props  뜻함
  //나머지 매개변수 쓴 이유는 수 많은 input 속성을 모두 명시할 수 없으므로 축약(간단하게 전부 다 다른 것)

  return (
    <>
      <div>
        <Wrapper style={containerStyle}>
          <Label>{label}</Label>
          <Input {...inputProps} />
        </Wrapper>
      </div>
    </>
  );
};
export default FormInput;

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  margin-bottom: 16px;
  ${flexCenter}
`;

const Input = styled.input`
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  height: 48px;
`;

const Label = styled.input`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #ffffff;
  z-index: 100;
  padding: 0 4px;
`;
