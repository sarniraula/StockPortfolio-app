import React, { useState } from 'react'
import { FaPiggyBank } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  color: white;
  margin: 2rem 2rem 0rem 2rem; 
`

const NavLeft = styled.div`
    flex: 1;
    font-size: 2rem;
`    

const NavCenter = styled.div`
  flex: 2;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`

const NavCenterLeft = styled.div`
    font-weight: 400;
    font-size: 1em;
`

const NavCenterRight = styled.div`
    display: flex;
    height: 1.5em;
    width: 35%;
    align-items: center;
    justify-content: left;
    background-color: #111317;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: transparent;
  &:hover {
    text-color: black;
  }
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  transition: transform .2s;
  display: block;
  text-align: left;
  &:hover {
    transform: scale(1.2);
    color: #EF8DE9;
    cursor: pointer;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: .75em;
  line-height: 0.5;
  background-color: transparent;
  width: 100%;
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-left: 5px;

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
    opacity: 50%;
  }
`;

const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin: 0 2rem;
`

const Logo = styled.span`
  margin-left: .75em;
`

function Navbar() {
    const [input, setInput] = useState("");
    
    const onFormSubmit = e => {
        // When form submited, clear input, close the searchbar and do something with input
        e.preventDefault();
        setInput("");
        // After form submit, do what you want with the input valuE
        console.log(`Form was submited with input: ${input}`);
    };


  return (
    <div>
        <Nav>
            <NavLeft>
                <FaPiggyBank />
                <Logo>Managya</Logo>
            </NavLeft>

            <NavCenter>
                <NavCenterLeft>
                    <span>Hi, Amir</span>
                </NavCenterLeft>
                <NavCenterRight>
                    <Form 
                        // On submit, call the onFormSubmit function
                        onSubmit={onFormSubmit}
                        >
                        <Button type="submit">
                            <FiSearch size={25}/>
                        </Button>
                        <Input
                            onChange={e => setInput(e.target.value)}
                            placeholder="Search"
                        />
                    </Form>
                </NavCenterRight>
            </NavCenter>

            <NavRight>
                  <DropDownLi>
                    <Dropbtn onClick={() => this.handleClick("DropDown")}>
                      <CgProfile size={30}/>
                    </Dropbtn>
                    <DropDownContent>
                      <SubA onClick={() => this.handleClick("Link1")}>Profile</SubA>
                      <SubA onClick={() => this.handleClick("Link2")}>Settings</SubA>
                      <SubA onClick={() => this.handleClick("Link3")}>Log Out</SubA>
                    </DropDownContent>
                  </DropDownLi>
            </NavRight>
        </Nav>
    </div>
  )
}

export default Navbar


