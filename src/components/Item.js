import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Item = () => {
  return (
    <Wrapper>
         <div class="card position-relative" style={{width: "18rem"}}>
            <Carousel 
                autoPlay={false}
                indicatorContainerProps={{
                    style: {
                    position: 'absolute',
                    bottom: 0,
                    zIndex: 999
                    }
                }}
                navButtonsProps={{ 
                    style: {
                        backgroundColor: '#ffffff',
                        color: '#460479'
                    }
                }} 
                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#ffffff'
                    }
                }}
            >
                <img class="card-img-top" src="https://placehold.co/600x400" alt="Card cap"/>
                <img class="card-img-top" src="https://placehold.co/600x400" alt="Card cap"/>
                <img class="card-img-top" src="https://placehold.co/600x400" alt="Card cap"/>
            </Carousel>
            <div class="card-body">
                {/* <i class="fa-solid fa-heart position-absolute"></i> */}
                <i class="fa-regular fa-heart position-absolute"></i>
                <div className='d-flex align-items-center justify-content-between'>
                    <p class="card-text-name">Ngaparou, Thiès, Senegal</p>
                    <p className='card-text-price'><span><i class="fa-solid fa-star"></i></span> 4.86</p>
                </div>
                <p>2,403 kilometers away</p>
                <p>Sep 4 – 11</p>
                <p>$134 per night</p>
            </div>
        </div>
    </Wrapper>
    
  )
}

export default Item

const Wrapper = styled.div`
    p {
        color: #717171;
    }
    .card-text-name {
        font-weight: 600;
        font-size: 16px;
    }
    .fa-star {
        font-size: 12px;
    }
    .fa-heart {
        top: 15px;
        right: 15px;
        z-index: 999;
        color: #ffffff;
        background-color: transparent;
        font-size: 20px;
    }
`