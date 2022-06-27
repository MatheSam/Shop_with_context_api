import styled from "styled-components";

export const DivCarrinho = styled.div`

  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  justify-content: space-between;

  img{
    width: 50px;
    border-radius: 30px;
  }

  h4, p{
    margin: 5px 0px;
    font-weight: 800
  }

  span{
    cursor: pointer;
    overflow: hidden;
    transition: .3s;
    
    :hover{
      transform: scale(1.2)
    }
  }
`