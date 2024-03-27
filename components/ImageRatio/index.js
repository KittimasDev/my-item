import React from 'react'
import { get } from "lodash";
import Image from 'next/image'
import { LazyLoadImage } from 'next/image';
import styled from "styled-components"

export const theme = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
}

function index(props) {

    const width = get(props, 'width', 0)
    const height = get(props, 'height', 0)
    const alt = get(props, 'alt', "")
    const src = get(props, 'src', "")


    const cacuRatio = (width, height) => {
        const ratioPadding = (height / width) * 100
        return ratioPadding;
    }

    return (
        <Wrapper
            theme={theme}
            ratio={cacuRatio(width, height)}
        >
            <Image
                fill
                alt={alt}
                src={src}
                sizes="100w"
            />
        </Wrapper>
    )
}

export default index

const Wrapper = styled.div`
    position: relative;
    padding-bottom: ${props => props.ratio}%;
    width: 100%;
    /* box-shadow: ${props => props.shadow == true && '1px 5px 5px 1px rgb(0 0 0 / 5%)'}; */
    object-fit: cover;
    img
    {
        object-fit: cover;
    }
    .simulation
    {
        z-index: 999;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
    }

`