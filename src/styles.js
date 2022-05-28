import styled from 'styled-components'

export const BoxHeader = styled.header`
    background-color:var(--color-secondary-bg);
    width:100vw;
    display:flex;
    justify-content: center;
    align-items: center;
    height:18.88vh;
    margin:0;
    padding:0;
    @media (min-width:840px){
        height: 80px;
    }
`   
export const ContentHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 2vh;
    @media (min-width:840px){
      justify-content: space-between;
      flex-direction: row;
      width:90%;
      margin: 0 auto;
    }
`
export const FormStyled = styled.form`
    display:flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    width:90vw;
    background-color: var(--color-white);
    border-radius: 8px;
    input{
    border:none;
    outline:none;
    }
    input::placeholder{
    padding-left:4px;
    }
    button{
    height:30px;
    width: 107px;
    border-radius: 4px;
    font-size: 14px;
    background-color:var(--color-primary-bg) ;
    color: var(--color-white);
    outline: none;
    cursor:pointer;
    margin-right: 5px;
    border:none;
    
  }
@media (min-width:840px){
width:30%;
height: 50px;
border-radius: 8px;
    }
    button{
      height:30px;
      border-radius: 8px;
    }
    input {
      height:97%;
      outline:none;
      border-radius: 8px;
    }
`
export const MainContainer = styled.main`
    @media (min-width:840px){
      display:flex;
      justify-content: space-between;
      align-items: flex-start;
      width:90vw;
      margin: 0 auto;
    }
`
 