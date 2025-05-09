import { ButtonBase, Typography } from '@mui/material'
import styled from 'styled-components'

interface StickyHeaderProps {
    scrolling: boolean
}

interface MenuListProps {
    visible: boolean
}

export const StickyHeader = styled.header<StickyHeaderProps>`
    padding: 15px;
    ${(props) =>
        props.scrolling &&
        `
        position: fixed;
        z-index: 1000 !important;
        top: 0px;
        left: 0px;
        width: 100%;
    `}
`

export const MonogramImage = styled.img`
    height: 50px;
    width: 50px;
    object-fit: contain;
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
