import React from 'react'
import styled from 'styled-components'
import {RiDashboardLine} from 'react-icons/ri'
import {BsFillInboxesFill} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {BiLogOut} from 'react-icons/bi'

const Side = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    margin: 6rem 0 2rem 2rem;
`

const SideItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 4rem;
    font-size: 15px;
    font-weight: 400;
    height : 30px;
    width: 70%;
    padding: 10px;
    border-radius: 10px;
    transition: transform .2s;
    &:hover {
        background: rgb(146,212,231);
        background: linear-gradient(105deg, rgba(146,212,231,1) 0%, rgba(233,233,241,1) 35%, rgba(230,122,227,1) 58%, rgba(88,101,235,1) 67%, rgba(120,225,246,1) 100%);
        color: black;
        transform: scale(1.2);
        cursor: pointer;
    }
    margin-top: ${props => props.logout ? "4em" : "0em" }
`

const Item = styled.div`
    margin-left: 2rem;
`

function Sidebar() {
  return (
    <Side>
        <SideItems>
            <RiDashboardLine size={25}/>
            <Item>Dashboard</Item>
        </SideItems>

        

        <SideItems>
            <BsFillInboxesFill size={25}/>
            <Item>Shares</Item>
        </SideItems>

        <SideItems>
            <FiSettings size={25}/>
            <Item>Settings</Item>
        </SideItems>

        <SideItems logout>
            <BiLogOut size={25}/>
            <Item>Log Out</Item>
        </SideItems>
    </Side>
  )
}

export default Sidebar