import React, { useContext } from 'react';
// import Link from 'next/link';
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <svg width="70" height="30" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg">

          <path fillRule="evenodd" clipRule="evenodd" d="M23.9985 27.923C28.4286 30.4807 33.3863 25.523 30.8286 21.0928L20.094 2.5C18.1695 -0.83333 13.3582 -0.833337 11.4337 2.5L0.69917 21.0928C-1.85859 25.523 3.09912 30.4807 7.52929 27.923L13.2639 24.6121C14.8109 23.7189 16.7169 23.7189 18.2639 24.6121L23.9985 27.923Z" fill="white"></path>

          <path fillRule="evenodd" clipRule="evenodd" d="M83.8723 27.923C88.3024 30.4807 93.2602 25.523 90.7024 21.0928L79.9678 2.50003C78.0433 -0.833299 73.2321 -0.833306 71.3076 2.50003L60.573 21.0928C58.0153 25.523 62.973 30.4807 67.4032 27.923L73.1377 24.6121C74.6847 23.7189 76.5907 23.7189 78.1377 24.6121L83.8723 27.923Z" fill="white"></path>

          <path fillRule="evenodd" clipRule="evenodd" d="M37.2996 1.49788C32.8694 -1.05987 27.9117 3.89785 30.4694 8.32801L41.204 26.9208C43.1285 30.2542 47.9398 30.2542 49.8643 26.9208L60.5988 8.32799C63.1566 3.89783 58.1989 -1.05988 53.7687 1.49788L48.0341 4.80873C46.4871 5.7019 44.5811 5.7019 43.0341 4.80874L37.2996 1.49788Z" fill="white"></path>
        </svg>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" css={{ paddingLeft: "75px" }}>
        <Navbar.Link href="https://avaevolve.vercel.app/">Home</Navbar.Link>
        <Navbar.Link href="https://avaevolve.vercel.app/about.html">About Us</Navbar.Link>
        <Navbar.Link isActive href="/">Blog</Navbar.Link>
        <Navbar.Link href="https://avaevolve.vercel.app/team.html">Team</Navbar.Link>
        <Navbar.Link href="https://avaevolve.vercel.app/volunteer.html">Volunteer</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item hideIn="xs">
          <div className="navbar__social-icons-container">
            <a className="navbar__social-icon" href="https://instagram.com/avaevolve" rel="noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172">
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#697177">
                    <path d="M57.33333,21.5c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333v57.33333c0,19.7585 16.07483,35.83333 35.83333,35.83333h57.33333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333v-57.33333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM57.33333,35.83333h57.33333c11.85367,0 21.5,9.64633 21.5,21.5v57.33333c0,11.85367 -9.64633,21.5 -21.5,21.5h-57.33333c-11.85367,0 -21.5,-9.64633 -21.5,-21.5v-57.33333c0,-11.85367 9.64633,-21.5 21.5,-21.5zM121.83333,43c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,50.16667c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333c0,19.7585 16.07483,35.83333 35.83333,35.83333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM86,64.5c11.85367,0 21.5,9.64633 21.5,21.5c0,11.85367 -9.64633,21.5 -21.5,21.5c-11.85367,0 -21.5,-9.64633 -21.5,-21.5c0,-11.85367 9.64633,-21.5 21.5,-21.5z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
            <a className="navbar__social-icon" href="https://discord.gg/Yg3dVzaDqp" rel="noreferrer" target="_blank">
              <svg height="24" viewBox="0 0 24 24" color="fff" width="24">
                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z">
                </path>
              </svg>
            </a>
            <a className="navbar__social-icon" href="https://github.com/one-loop/AVA" rel="noreferrer" target="_blank"><svg height="24" viewBox="0 0 24 24" width="24">
              <path clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fillRule="evenodd"></path>
            </svg></a>
          </div>
        </Navbar.Item>
        <Navbar.Item hideIn="xs">
          <Button auto flat as={Link} href="https://www.patreon.com/oneloop" css={{ background: '#333333b3', color: '#ffffff', fontSize: '14px' }}>
            <svg fill="var(--nextui-colors-red600)" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z" stroke="var(--nextui-colors-red600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
            Sponsor
          </Button>
        </Navbar.Item>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Collapse>
          <Navbar.CollapseItem key="Home" activeColor="secondary">
            <Link
              color="inherit" css={{ minWidth: "100%", }} href="https://avaevolve.vercel.app/">Home</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="About">
            <Link
              color="inherit" css={{ minWidth: "100%", }} href="https://avaevolve.vercel.app/about.html">About</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Blog" isActive>
            <Link
              color="inherit" css={{ minWidth: "100%", }} href="/">Blog</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Team" activeColor="secondary">
            <Link
              color="inherit" css={{ minWidth: "100%", }} href="https://avaevolve.vercel.app/team.html">Team</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Volunteer" activeColor="secondary">
            <Link
              color="inherit" css={{ minWidth: "100%", }} href="https://avaevolve.vercel.app/volunteer.html">Volunteer</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Sponsor" activeColor="secondary">
            <Link
              color="inherit" css={{ minWidth: "100%", }} href="https://www.patreon.com/oneloop">Sponsor</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Community" activeColor="secondary">
            <Link
              color="inherit" css={{ minWidth: "100%", }} href="https://avaevolve.vercel.app/about.html#community">Community</Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar.Content>
    </Navbar>
  )
}

export default Header