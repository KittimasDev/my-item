'use client'
import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import { get } from 'lodash'
import styled from "styled-components"
import S1 from '../../Product/Product.json'

const Card = dynamic(() => import('@/components/Card'), { ssr: false })

export const theme = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
}

function Tab() {

    const items_S1 = get(S1, 'items', null)

    const [state, setState] = useState('s1')
    const [width, setWidth] = useState(0)
    const [itemFilter, setItemFilter] = useState([])

    const items = [
        {
            name: 'ชีวิตประจำวัน',
            value: 's1'
        },
        {
            name: 'ทำความสะอาด',
            value: 's2'
        },
        {
            name: 'ของใช้',
            value: 's3'
        },
    ]

    useEffect(() => {

        const eiei = items_S1.filter(item => {
            const tag = get(item, 'tag', [])
            return tag.indexOf('ทำความสะอาด') != -1
        })
        setItemFilter(eiei)
    }, [state])

    useEffect(() => {
        let width = screen?.width;
        setWidth(width / 3)
    }, [screen?.width])

    return (
        <Wrapper theme={theme} maxWidth={width}>
            <div className='my-container'>
                <div data-main="bg">
                    {
                        items.map((item, k) => {
                            return (
                                <div data-main="item" className={`${state == item.value ? 'active' : ''}`} key={`item-${k}`} onClick={() => setState(item.value)}>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div data-main="border">
                    <div data-main="wrapper-group">
                        {
                            state == 's1' &&
                            items_S1.map((item, k) => {
                                return (
                                    <div data-main="wrapper-group-card" key={`key-${k}`}>
                                        <Card {...item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Tab

const Wrapper = styled.div`
    padding: 20px;
    @media(min-width: ${({ theme }) => theme.md}) 
    { 
        padding: 40px;  
    }
    [data-main="bg"]
    {
        display: flex;
        gap: 20px;
    }
    [data-main="item"]
    {
        border:1px solid #ebeaea;
        border-radius: 16px;
        padding: 4px 16px;
    }
    [data-main="item"]:hover
    {
        background: black;
        color:white;
        cursor: pointer;
    }
    [data-main="border"]
    {
        height: 1px;
        background: #ebeaea;
        width: 100%;
        margin-top: 20px;
        @media(min-width: ${({ theme }) => theme.md}) 
        { 
            margin-top: 40px;
        }
    }
    [data-main="wrapper-group"]
    {
        display: grid;
        grid-template-columns: 1fr;
        padding: 20px 0px;
        gap: 20px;
        @media(min-width: ${({ theme }) => theme.md}) 
        { 
            grid-template-columns: 1fr 1fr;
            padding: 40px 0px;
            gap: 40px;
        }
        @media(min-width: ${({ theme }) => theme.lg}) 
        { 
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    [data-main="wrapper-group-card"]
    {
        max-width: ${props => props.maxWidth}px;
    }
    .active
    {
        background-color: black;
        color:white;
    }
`

// import React from 'react'

// function index() {
//   return (
//     <div>index</div>
//   )
// }

// export default index