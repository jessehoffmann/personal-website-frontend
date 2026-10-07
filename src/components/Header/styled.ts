import { ButtonBase, Typography } from '@mui/material'
import { Link } from 'react-router'
import styled from 'styled-components'

import { pageGutterPx, pageMaxWidth } from '../PageColumn'

interface MenuListProps {
    visible: boolean
}

export const mobileNavMaxWidthPx = 720
// Logo is 40px. Bottom padding is 11px so this height, including the
// 1px border, matches the top of the Home item in the mobile menu.
export const mobileHeaderHeightPx = 64

export const StickyHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    height: ${mobileHeaderHeightPx}px;
    background-color: white;
    padding: 12px 0 11px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    z-index: 1000;

    @media screen and (min-width: ${mobileNavMaxWidthPx + 1}px) {
        height: auto;
        padding: 15px 0;
    }
`

export const HeaderContent = styled.div`
    max-width: ${pageMaxWidth}px;
    width: calc(100% - ${pageGutterPx.xs * 2}px);
    min-width: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;

    @media screen and (min-width: 600px) {
        width: calc(100% - ${pageGutterPx.sm * 2}px);
    }
`

export const Brand = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
`

export const HeaderTitle = styled.p<{ $color: string }>`
    min-width: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
    color: ${(props) => props.$color};
    transition: color 0.2s ease-in-out;

    @media screen and (max-width: 359px) {
        font-size: 17px;
    }

    @media screen and (min-width: 550px) {
        font-size: 24px;
    }

    @media screen and (min-width: 800px) {
        font-size: 28px;
    }
`

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
`

export const HeaderLinkList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const HeaderLinks = styled.li`
    margin: 0 30px 0 0;
    text-align: right;
    font-weight: 300;
    font-size: 16px;

    &:last-child {
        margin-right: 0;
    }

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
    height: 40px;
    width: 40px;
    object-fit: contain;
    transition: transform 0.2s ease-in-out;

    @media screen and (min-width: ${mobileNavMaxWidthPx + 1}px) {
        height: 60px;
        width: 60px;
    }
`

export const BrandLink = styled(Link)<{ $hoverColor: string }>`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    max-width: 100%;
    text-decoration: none;
    color: inherit;

    &:hover ${MonogramImage} {
        transform: scale(1.05);
    }

    &:hover ${HeaderTitle} {
        color: ${(props) => props.$hoverColor};
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
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    flex-shrink: 0;
    color: rgba(0, 0, 0, 0.87);
`
