import styled from "styled-components";

export const Section = styled.div`
margin-top: 40px;
width: 300px;
height: 370px;
display: flex;
justify-content: center;
border-radius: 20px;
background: #f8b085;
background: radial-gradient(circle farthest-side at center center, #f8b085 0%, #FEE5D2 80%);
background: -webkit-radial-gradient(circle farthest-side at center center, #f8b085 0%, #FEE5D2 80%);
background: -moz-radial-gradient(circle farthest-side at center center, #f8b085 0%, #FEE5D2 80%);
overflow: hidden;
transition: .3s;
box-shadow: 1px -1px 17px 6px rgba(0,0,0,0.4);
-webkit-box-shadow: 1px -1px 17px 6px rgba(0,0,0,0.4);
-moz-box-shadow: 1px -1px 17px 6px rgba(0,0,0,0.4);


:hover{
  transform: scale(1.1);
  box-shadow: 1px -1px 17px 6px rgba(0,0,0,0.4);
-webkit-box-shadow: 1px -1px 17px 6px rgba(0,0,0,0.4);
-moz-box-shadow: 1px -1px 17px 6px rgba(0,0,0,0.4);
}

 .container {
  display: flex;
  background-color: red;
  margin-top: 40px;
  width: 220px;
  height: 100px;
  border-radius: 20px;
  position: relative;
  justify-content: center;
  background: radial-gradient(circle farthest-corner at center center, #fcc10c 0%, #ff6b01 80%);
  background: -webkit-radial-gradient(circle farthest-corner at center center, #fcc10c 0%, #ff6b01 80%);
  background: -moz-radial-gradient(circle farthest-corner at center center, #fcc10c 0%, #ff6b01 80%);

  .itens {
    display: flex;
    flex-direction: column;
    align-items: center;
 

    img{
      width: 150px;
      height: 180px;
      top: 20px;
      position: absolute;
      border-radius: 40px;

    }

    h4{
      color: #45409C;
      position: relative;
      top: 200px;
    }

    p {
      color: #717195;
      position: absolute;
      top: 230px;
    }

    span{
      position: absolute;
      top: 280px;
      overflow: hidden;
      transition: .3s;

      :hover{
        cursor: pointer;
        transform: scale(1.5)
      }
    }
  }
 }


`