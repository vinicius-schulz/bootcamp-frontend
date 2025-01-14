import styled from 'styled-components'

const Main = styled.div`  
  display: flex;
  padding: 40px;
  min-height: 100vh;
  position: relative;
  flex-wrap: wrap;
`
  
const PerfilContent = styled.div`  
  width: 50% ;
`
  
const PerfilSocialMedias = styled.div`  
  width: 50%;
`
  
const Divisor = styled.div`
   top: 40px;
   border-left: 1px solid #0000003b;
   height: 440px;
   position: absolute;
   left: 50%;
`

const OngInfos = styled.div`
    display: flex;
    flex-wrap: wrap;

    > h4 {
        text-align: center;
        display: block;
        margin: 0 0 30px;
        width: 100%;
        font-size: 1.5em;
        font-weight: 400;
    }

    > span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 1.1em;
        padding: 0 5px 15px;
        white-space: pre;
        overflow: hidden;
    }
    > span > svg {
        margin-right: 5px;
    }
`

const OngImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 250px;
    padding: 10px 0;
`

const OngImg = styled.img`
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
`

const SocialMediaListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap
`
    
const SocialMediaListItemContainer = styled.li`
    display: flex;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    line-height: 60px;
    color: rgb(0 0 0 / 48%);
`

const SocialMediaImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 5px 20px 5px 5px
`

const PublishContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 50px 0px 20px;
`

const PublishTextarea = styled.textarea`
    width: 30%;
    height: 100px;
    padding: 10px;
    resize: none;
    margin-right: 10px; 
    font-weight: 300;
    font-size: 14px;
    color: #6A676A;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 10%);
    border: 1px solid #a39f9fa3;
    :focus {
        outline: 0;
    }
`

const PublishButton = styled.button`
    cursor: pointer
`

export {
    PublishContainer,
    PublishTextarea,
    PublishButton,
    SocialMediaImg,
    SocialMediaListContainer,
    SocialMediaListItemContainer,
    Main,
    PerfilContent,
    PerfilSocialMedias,
    Divisor,
    OngInfos,
    OngImgContainer,
    OngImg
}