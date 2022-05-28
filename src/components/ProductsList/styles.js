import styled from 'styled-components'

export const BoxContent = styled.section`
  display: flex;
  margin:20px;
  @media (min-width: 840px) {
    align-items: center;
    width: 70%;
  }
  .Card{
    display:flex;
    flex-direction: column;   
    justify-content: space-between;
    list-style: none;
    border: 2px solid var(--color-secondary);
    height:344px;
    width: 280px;
    font-family: 'Inter';
}
.Card figure{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--color-secondary-bg);
    width:276px;
    margin:0

}
.Card section {
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    height:192px;
    margin-left:20px;
}
.Card figure img{
    height:177px;
    width:177px;
    
}
.Card span{
    font-weight: 400;
    font-size: 12px;
}
.Card h2{
    font-weight: 700;
    font-size:18px;
}
.Card p{
    margin:0;
    font-size:14px;
    font-weight:600;
    color:var(--color-primary-bg);
}
.Card button{
    background-color: var(--color-primary-bg);
    border-radius: 8px;
    width:106px;
    height:40px;
    color:var(--color-white);
    font-weight:600;
    font-size:14px;
    outline: none;
    border:none;
}
`;
export const BoxVitrine = styled.ul`
  width: 90vw;
  height: 348px;
  display: flex;
  column-gap: 4vw;
  overflow-x: scroll;
  @media (min-width: 840px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    overflow-x: hidden;
    gap: 1vw;
    padding: 0;
  }
`;