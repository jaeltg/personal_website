import styled from 'styled-components'

export const HomeContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
postion: relative;
z-index: 1;
`
export const HomeContent = styled.div `
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HomeH1 = styled.h1 `
color: black;
font-size: 48px; text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;  
}

@media screen and (max-width: 480px) {
    font-size: 32px;  
}
`
export const HomeBtnWrapper = styled.div `
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

