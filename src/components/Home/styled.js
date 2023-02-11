import styled from 'styled-components'

export const FeaturedWorkContainer = styled.div`
    display: inline-block;
    background: white;
    width: 100%;
    margin-bottom: 10px;
    background-color: inherit;
`

export const ProjectLinkFlexContainer = styled.a`
    display: flex;
`

export const ProjectDescriptionFlexItem = styled.div`
    flex: 2;
    padding: 15px;

    @media (max-width: 500px) {
        flex: 1;
    }
`

export const ProjectImageFlexItem = styled.div`
    flex: 3;

    @media (max-width: 500px) {
        flex: 1;
    }
`

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    vertical-align: top;
    float: right;
    object-fit: cover;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
`

export const ProjectTitle = styled.h4`
    font-size: 21px;
    margin: 0;
    text-align: center;

    @media (min-width: 500px) {
        font-size: 12px;
    }
`

export const MainCoverImage = styled.img`
    padding-top: 0px;
    padding-bottom: 0px;
    width: 100%;
    min-height: 250px;
    max-height: 400px;
    object-fit: cover;
`
