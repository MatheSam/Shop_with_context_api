import styled from "styled-components";

export const Div = styled.div`
margin-top: 40px;
display: flex;
align-items: center;
position: relative;

h2, p, span {
  margin: 0px;
}

p {
  font-size: 1.1rem;
}

h2{
  position: absolute;
  top: -20px;
  left: 20px;
}

:hover{
  cursor: pointer;
}


`