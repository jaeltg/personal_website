import styled from 'styled-components'

export const AboutContainer = styled.div `
color: black;
background: #c9e265;

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

export const AboutWrapper = styled.div `
display: grid;
z-index: 1;
height: 850px;
width: 100%;2
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const AboutRow = styled.div `
display: grid;
grid-auto-columns: minmax(auto; 1fr);
align-items: center;
grid-template-areas: 'col2 col1';

@media screen and (max-width: 768px) {
    grid-template-areas: 'col2 col2' 'col1 col1';  
}
`

export const Column1 = styled.div `
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;

@media screen and (max-width: 768px) {
    text-align: center;
    
}
`

export const Column2 = styled.div `
margin-bottom: 15px;
padding: 0 80px;
grid-area: col2;
`

export const TextWrapper = styled.div `
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`


export const Heading = styled.h1 `
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: white;

@media sreen and (max-width: 480px) {
    font-size: 32px;
}
`
export const Intro = styled.p `
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: white;
font-weight: bold;
`

export const Subtitle = styled.p `
max-width: 440px;
margin-bottom: 16px;
font-size: 18px;
line-height: 24px;
color: white;
font-weight: bold;
`

export const Par = styled.p `
max-width: 440px;
margin-bottom: 40px;
font-size: 14px;
line-height: 22px;
color: white;
font-weight: bold;
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
gap: 10px;

@media screen and (max-width: 768px) {
    justify-content: center;
`
export const Icon = styled.div `
display: grid;
grid-template-rows: 1fr 1fr;
justify-items: center;
`

export const BtnWrap = styled.div `
display: flex;
justify-content: flex-start;

@media screen and (max-width: 768px) {
    justify-content: center;
}
`

export const ImgWrap = styled.div `
max-width: 400px;
height: 100%
`

export const Img = styled.img `
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
max-height:750px;
border-radius: 30px;
`