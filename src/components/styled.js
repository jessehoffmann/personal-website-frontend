import styled from 'styled-components'

export const PageContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    margin-top: 30px;
`

export const PageTitle = styled.h3`
    color: black;
    text-align: center;
    margin: 0px;
    font-weight: 300;
    padding-top: 10px;

    padding: 25px;
    padding-bottom: 15px;

    @media (min-width: 500px) {
        font-size: 26px;
    }
`

export const PageContent = styled.div`
    margin: 40px;
    margin-top: 0px;
    text-indent: 25px;

    @media (max-width: 500px) {
        margin: 20px;
    }
`
