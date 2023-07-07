import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const ListItem = () => {
  return (
    <Wrapper>
        <div className='d-none d-lg-block'>
            <div className='d-flex align-items-center justify-content-center'>
                <div  className='d-flex align-items-center justify-content-between search'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='m-0 p-0 search-list'>Display total price</p>
                        <p className='m-0 p-0  mini-p'>Includes all fees, before taxes</p>
                    </div>
                    <i class="fa-solid fa-toggle-on"></i>
                </div>
            </div>
        </div>
        <div className='d-block d-lg-none'>
            <div className='d-flex align-items-center justify-content-between search'>
                <div className=''>
                    <p className='m-0 p-0'>Display total price</p>
                    <p className='m-0 p-0 mini-p'>Includes all fees, before taxes</p>
                </div>
                <i class="fa-solid fa-toggle-on"></i>
            </div>
        </div>
        <div className='list-cards'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </Wrapper>
    
  )
}

export default ListItem

const Wrapper = styled.div`
    p {
        margin: 0;
        padding: 0;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    }
    padding: 20px 50px;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    .fa-toggle-on {
        font-size: 30px;
        color: #dddddd;
        margin-left: 20px;
    }
    .search {
        /* display: flex;
        justify-content: space-between; */
        background: #ffffff;
        border-radius: 12px;
        border: 2px solid #dddddd;
        box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
        padding: 15px;
        font-size: 14px;
        line-height: 22px;
        font-weight: 600;
        p {
            padding: 0 15px !important;
        }
        .search-list {
            font-weight: 600;
            border-right: 1.4px solid #dddddd;
        }
        .mini-p {
            font-weight: 400;
        }
    }
    .divider {
        border-left: 1px solid #dddddd;
    }
    .list-cards {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .card {
        margin: 20px 0;
        border-width: 0;
        .card-img-top {
            border-radius: 13px;
        }
    }
    button {
        outline: none;
        border: none;
    }
    
`