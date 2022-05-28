import styled from 'styled-components'

export const Container = styled.section`
width:100vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
@media (min-width:840px){
    width:30%;
    margin-top:20px;
}
`
export const BoxTitle = styled.div`
display:flex;
align-items: center;
border-radius: 8px 8px 0 0;
width:90vw;
height:65px;
background-color:#27AE60 ;
    h2{
        color:var(--color-white);
        font:'Inter';
        font-weight: 700;
        font-size:18px;
        margin-left: 20px;
    }
@media (min-width:840px){
    width: 100%;
}
`
export const BoxContentCart  = styled.div`
height:150px;
background-color: var(--color-secondary-bg);
width:90vw;
@media (min-width:840px){
    width: 100%;
}
`
export const ProductsCart = styled.ul`
width:90vw;
padding: 0;
margin:0;
background-color: var(--color-secondary-bg);
@media (min-width:840px){
    display:flex;
    flex-direction: column;
    background-color: var(--color-secondary-bg);
    width: 100%;
    padding: 0;
    margin:0
}
`
export const Product = styled.li`
display:flex;
align-items: center;
justify-content:flex-start;
width:80vw;
    aside{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width:100%;
        margin-left:10px;
    }
    figure{
        background-color: var(--color-secondary-bg);
        width:80px;
        height:80px;
        border-radius: 8px;
       
    }
    img{
        width:70px;
        height:70px;
        
    }
    button{
        font-weight:500;
        align-self:flex-start;
        background-color:var(--color-secondary-bg);
        border:none;
        color:#BDBDBD;
        cursor:pointer;
    }
    h3{
        font-size:18px;
        color:var(--color-textCart);
    }
    span{
        color:var(--color-textCart);
        font-size:12px;
        font-weight: 400;
    }
    
@media (min-width:840px){
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    width: 96%;
    margin:10px;
    figure{
        display:flex;
        justify-content: center;
        width:200px;
        height:80px;
        border-radius:8px;
    }
    h3{
        color:var(--color-textCart);
        font-size:14px;
        font-weight:700;
    } 
    
    img{
        width:80px;
        height:80px;
    } 
}
`
export const EmptyCart = styled.aside`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:150px;
    span{ 
        font-size:18px;
        font-weight: 700;
    }
    p{
        font-size:14px;
        font-weight:400;
        color:var(--color-textCart);
    }
`
export const TotalPrice = styled.aside`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
border-top : 1px solid #E0E0E0 ;
height:110px;
margin-top: 10px;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    } 
    p{
        color:var(--color-textCart);
        font-weight: 600;
    } 
    button{
        height:50px;
        width: 90%;
        background-color: #E0E0E0;
        border-radius:8px;
        border:none;
        color:var(--color-textCart);
    }
@media (min-width:840px){
height:140px; 
    button{
        width:343px;
        height:60px;
    }   
}
`   

