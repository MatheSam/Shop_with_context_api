import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .backGround{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 75vw;
    height: 300px;
    border-radius: 40px;
    background: #feb761;
    background: radial-gradient(circle farthest-side at top center, #feb761 0%, #fdc01c 40%, #fdbc0b 40%, #fdbe3f 80%);
    background: -webkit-radial-gradient(circle farthest-side at top center, #feb761 0%, #fdc01c 40%, #fdbc0b 40%, #fdbe3f 80%);
    background: -moz-radial-gradient(circle farthest-side at top center, #feb761 0%, #fdc01c 40%, #fdbc0b 40%, #fdbe3f 80%);
    position: relative;

    .products{
      display: flex;
      justify-content: center;
      gap: 20px;
      /* width: 940px; */
      flex-wrap: wrap;
      position: absolute;
      top: 50px;
    }
  }

  @media (min-width: 700px) {
    .products{
      width: 700px;
    }
  }

  @media (min-width: 970px) {
    .products{
      width: 940px;
    }
  }

`