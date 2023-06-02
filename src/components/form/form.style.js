import styled from "styled-components";

export const Main = styled.form`
  width: 100%;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const ContainerInput = styled.div`
  width: 40%;
  padding: 3%;
`;

export const ContainerText = styled.div`
  width: 90%;
`;

export const Error = styled.span`
  color: red;
`;

export const Input = styled.input`
  width: 30%;
  height: 29px;
  background: #ffffff;
  border-radius: 4px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  background: #ffffff;
  border-radius: 4px;
  width: 100%;
  height: 250px;
`;
