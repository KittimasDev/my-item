"use client";
// import { get } from "lodash"
import React, { useEffect, Fragment } from 'react'
import Image from "next/image"
// import dynamic from "next/dynamic"
import Link from 'next/link'
import styled from "styled-components"
// import Drawer from "@mui/material/Drawer"
import { useRouter } from "next/navigation"


import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export const theme = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
}

const Header = ({ ...props }) => {
  const router = useRouter()

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavbar(false);
  };

  return (
    <Fragment>
      {
        <HeaderComponent id="main-layout-header" theme={theme}>
          <div>
            <Desktop theme={theme}>
              <div data-menu="container">
                <div data-menu="container-flex">
                  <div data-header-mobile="logo-rsmusic" onClick={() => router.push('/')}>
                    <Image alt="ulife" width={150} height={100} src="/Logo_2.png" />
                  </div>
                </div>
              </div>
            </Desktop>
          </div>
        </HeaderComponent>
      }
    </Fragment>
  )
}

const Mobile = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: black;
    @media(min-width: ${props => props.theme.md}) { 
      display: none;
      padding: 20px 20px;
    }
    [data-header-mobile="logo-rsmusic"]
    {
      position: relative;
      display: flex;
      align-items: center;
    }
    [data-navbar="drawer-container"]
    {
      width: 50%;
    }
    [data-menu="hamburger-menu"]
    {
      display: flex;
      align-items: center;
      svg
      {
        width: 2em;
        height: 2em;
        path
        {
          fill: white;
        }
      }
    }
`

const Desktop = styled.div`
     display: none; 
     background-color: black;
     color: var(--color-white);
     font-weight: 300;
     font-size: 14px;
    @media(min-width: ${({ theme }) => theme.md}) { 
      display: flex;
      justify-content: center;
      padding: 5px 5px;
      font-size: 16px;
    } 
    [data-header-mobile="logo-rsmusic"]
    {
      position: relative;
      display: flex;
      align-items: center;
    }
    [data-menu="container"]
    {
      width: 100%;
      padding: 0px 15px;
      @media(min-width: ${({ theme }) => theme.md}) { 
        position: relative;
        padding: 0px 45px;
      } 
      @media(min-width: ${({ theme }) => theme.lg}) { 
        position: relative;
        margin: auto;
        max-width: 1600px !important;
      } 
    }
    [data-menu="container-flex"]
    {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
    }
    [data-header-mobile="menu-2"]
    {
      display:flex;
      align-items: center;
      gap: 20px;
    }
    [data-header-mobile="menu-3"]
    {
      display:flex;
      align-items: center;
      gap: 20px;
      margin-left: 40px;
      @media(min-width: ${({ theme }) => theme.xl}) { 
        margin-left: 120px;
      } 
    }
    [data-header-mobile="gap-text"]
    {
      padding:0px 10px;
    }
    [data-header-mobile="text-active"]
    {
        color:var(--color-white);
        cursor: pointer;
    }
    [data-header-mobile="text-"]
    {
      color:#818181!important;
      cursor: pointer;
    }
`

export const HeaderComponent = styled.div`
  top: 0;
  left: 0;

  z-index: 9999;
  width: 100%;
  position: sticky;

  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%);
  background-color: var(--color-white);

  [data-header="hearder-main-warpper"] {
    width: 100%;
    position: relative;
  }

  [data-header="flex-view-user"]
  {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  [data-header="wrapper-menu-sub-wrapper"]
  {
    position:absolute;
    top: 20px;
    display: none;
  }
  [data-header="wrapper-menu-sub-wrapper"] :first-child 
  {
    border-radius: 8px 8px 0px 0px;
  }
  [data-header="wrapper-menu-sub-wrapper"] :last-child 
  {
    border-radius: 0px 0px 8px 8px;
  }
  [data-header="wrapper-menu"]
  {
    position: relative;
    
  }
  [data-header="wrapper-menu"]:hover
  {
    position: relative;
    [data-header="wrapper-menu-sub-wrapper"]
    {
      display: block;
      color:black;
      box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 5px 0px;
      padding-top: 10px;
    }
  }
  [data-header="wrapper-menu-sub"]
  {
    border-bottom:1px solid rgba(167, 168, 169, 0.2);
    padding: 6px;
    background: white;
    font-size: 12px;
    @media(min-width: ${({ theme }) => theme.xl}) { 
      font-size: 14px;
    } 
  }
  [data-header="wrapper-menu-sub"]:hover
  {
    background-color: black;
    color: white;
    
  }
`

export default Header
