import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav>
            <List>
                <Item>
                    <NavLink to="/updateDatabase" activeStyle={activeStyle}>
                        更新資料庫
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/foreigninvestors" activeStyle={activeStyle}>
                        外資
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/investmenttrust" activeStyle={activeStyle}>
                        投信
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/dealer" activeStyle={activeStyle}>
                        自營商
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/test" activeStyle={activeStyle}>
                        查詢連日減少成交量
                    </NavLink>
                </Item>
            </List>
        </Nav>
    );
};

export default NavBar;

const activeStyle = {
    color: 'red',
    fontWeight: 'bold',
};

const Nav = styled.nav`
    width: 100%;
    height: 50px;
    background: skyblue;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Item = styled.li`
    width: 150px;
    height: 50px;
    color: gray;
    font-size: 18px;
    line-height: 50px;
    text-align: center;

    a {
        display: block;
    }

    &:hover {
        background: #fff;
        cursor: pointer;
    }
`;
