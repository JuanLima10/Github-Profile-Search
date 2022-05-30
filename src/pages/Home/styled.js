import styled from 'styled-components'

export const Home = styled.div`
    margin: 2rem 0;

    h1{
        color: #E8F1F2;
        text-align: center;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
`

export const Search = styled.input`
    max-width: 100%;
    outline: none;

    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #E8F1F2;
    background: #13293D;

    border: none;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 18px;
    
    padding: 0.625rem;
    margin: 1rem 1rem 0 0;

    &:focus,
    &:hover{
        background: rgba(240, 46, 170, 0.8);
        box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px;
        transition: all 0.4s;
    }
`

export const Button = styled.button`
    cursor: pointer;

    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #E8F1F2;
    background: #13293D;

    border: none;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 18px;

    padding: 0.625rem;
    margin: 1rem 0;

    &:hover{
        background: rgba(240, 46, 170, 0.8);
        box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px;
        transition: all 0.4s;
    }
`

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 2rem;

    margin: 2rem 0;

    img{
        width: 300px;
        max-width: 100%;
        border-radius: 50px;
        box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px;
    }

    @media screen and (max-width: 715px){
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
    }
`
export const Infos = styled.div`
    margin: 0;

    h1{
        text-align: start;
        margin: 0.5rem 0 1.34rem 0;
    }

    h3{
        max-width: 300px;
        color: #E8F1F2;
        margin: 0.5rem 0 0 0;
    }

    h5{
        font-size: 0.865rem;
        font-weight: 500;
        color: #E8F1F280;
    }

    p{
        color: #E8F1F2;
    }

    .redes{
        display: flex;
        align-items: center;
        gap: 1rem;

        a{
            font-size: 1.5rem;
            color: #E8F1F2;
            
            &:hover{
                color: rgba(240, 46, 170, 0.8);
                trasition: all 0.4s;
            }
        }
    }
`


export const Err = styled.p`
    margin: 2rem 0;
    color: #E8F1F2;
`