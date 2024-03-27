'use client'
import React from 'react'
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react'

import { get } from 'lodash'
import styled from "styled-components"

const ImageRatio = dynamic(() => import("@/components/ImageRatio"));

export const theme = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",

    blueColor: "#0F3460",
    blackColor: "#000000",
}

function Card(props) {

    const ImageUrl = get(props, 'ImageUrl', [])
    const lazada = get(props, 'lazada', [])
    const link = get(props, 'link', [])
    const lnwshop = get(props, 'lnwshop', [])
    const shopee = get(props, 'shopee', [])
    const short_descritions = get(props, 'short_descritions', [])
    const size = get(props, 'size', [])
    const tag = get(props, 'tag', [])
    const title = get(props, 'title', [])

    const modal = get(props, 'modal', [])
    const topic = get(modal, 'topic', [])
    const descritions_1 = get(modal, 'descritions_1', [])
    const descritions_2 = get(modal, 'descritions_2', [])
    const descritions_3 = get(modal, 'descritions_3', [])
    const descritions_4 = get(modal, 'descritions_4', [])
    const descritions_5 = get(modal, 'descritions_5', [])
    const descritions_6 = get(modal, 'descritions_6', [])

    const openInNewTab = (url) => {

        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <Wrapper theme={theme} onClick={() => openInNewTab(link)}>
            <div>
                <ImageRatio
                    src={ImageUrl}
                    alt={title}
                    width={500}
                    height={500}
                />
            </div>
            <div data-card='content'>
                <h1 data-card="title">{title}</h1>
                {/* <div data-card="description">{short_descritions}</div> */}
                <div data-card="info">
                    <div data-card="flex-view">
                        <div>ปริมาณ</div>
                        <div>{size}</div>
                    </div>
                    <div data-card="tag">
                        <div>Tag</div>
                        <div data-tag="wrapper">
                            {tag.map((value, k) => {
                                return (
                                    <div data-card="tag-item" key={`key-${k}`}>
                                        {value}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 1px, rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border-radius:16px;
    cursor: pointer;
    padding-bottom: 20px;
    @media(min-width: ${({ theme }) => theme.md}) 
        { 
            padding-bottom: 40px;
        }
    [data-card="title"]
    {
        margin-top:20px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @media(min-width: ${({ theme }) => theme.md}) 
        { 
            margin-top: 20px;
            font-size: 24px;
        }
    }
    [data-card='content']
    {
        padding:0px 20px;
    }
    [data-card="flex-view"]
    {
        display: flex;
        justify-content: space-between; 
    }
    [data-card="info"]
    {
        margin-top: 10px;
        @media(min-width: ${({ theme }) => theme.md}) 
        { 
            margin-top: 20px;
        }
    }
    [data-card="tag"]
    {
        margin-top: 10px;
    }
    [data-tag="wrapper"]
    {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
    }
    [data-card="tag-item"]
    {
        background-color: black;
        color:white;
        border-radius: 16px;
        padding: 4px 12px;
    }
    [data-card="tag-item"]:hover
    {
        background-color: white;
        color:black;
        border: 1px solid black;
    }
    [data-card="description"]
    {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`