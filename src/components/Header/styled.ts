import { ButtonBase, Typography } from '@mui/material'
import styled from 'styled-components'

interface StickyHeaderProps {
    scrolling: boolean
}

interface MenuListProps {
    visible: boolean
}

export const StickyHeader = styled.header<StickyHeaderProps>`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 12px;
    transition: all 0.3s ease-in-out;
    box-shadow: ${props => props.scrolling ? '0 2px 4px rgba(0,0,0,0.1)' : '0px 0px 8px 0 grey'};
    z-index: 1000;
    font-family: 'Raleway', sans-serif;

    @media screen and (min-width: 500px) {
        padding: 15px;
    }
`

export const HeaderContent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;

    @media screen and (min-width: 500px) {
        padding: 0 20px;
    }
    @media screen and (min-width: 1000px) {
        padding: 0 40px;
    }
`

export const HeaderTitle = styled.h1`
    flex: 1;
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    margin-top: 5px;
    margin-left: 20px;
    vertical-align: bottom;
    color: black;

    @media screen and (min-width: 550px) {
        font-size: 30px;
    }

    @media screen and (min-width: 800px) {
        font-size: 40px;
    }
`

export const HeaderLinks = styled.h3`
    margin-right: 30px;
    text-align: right;
    font-weight: 300;
    font-size: 16px;

    a {
        text-decoration: none;
        color: black;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: #666;
        }
    }
`

export const MonogramImage = styled.img`
    height: 50px;
    width: 50px;
    object-fit: contain;
    transition: transform 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }
`

export const MenuList = styled.ul<MenuListProps>`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: absolute;
    right: 12px;
    list-style-type: none;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px;
    border-radius: 10px;
`

export const MenuListItem = styled(Typography)`
    padding: 10px;
`

export const MenuButton = styled(ButtonBase)`
    background-color: white;
    padding: 5px !important;
    border: 0px;
    font-size: 0;
`

export const MenuImage = styled.img`
    width: 32px;
    height: 32px;
`
