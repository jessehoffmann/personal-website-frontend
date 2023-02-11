import styled from 'styled-components'

export const MonogramImage = styled.img`
    height: 50px;
    width: 50px;
    margin-left: 20px;
    margin-top: 4px;
    object-fit: contain;

    @media (max-width: 500px) {
        margin-left: 0px;
    }
`

export const MenuList = styled.ul`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: absolute;
    right: 12px;
    list-style-type: none;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px;
`

export const MenuListItem = styled.li`
    margin: 10px;
`

export const MenuButton = styled.button`
    background-color: white;
    padding: 5px !important;
    border: 0.5px solid black;
    border-radius: 5px;
    font-size: 0;
`

export const MenuImage = styled.img`
    width: 40px;
    height: 40px;
`
