import styled from 'styled-components'

export const HeadshotImage = styled.img`
    width: 200px;
    height: 250px;
    float: left;
    margin-left: 50px;
    margin-right: 60px;
    margin-bottom: 30px;
    object-fit: cover;
    border-radius: 15px;

    @media (max-width: 640px) {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
        object-fit: contain;
    }
`
