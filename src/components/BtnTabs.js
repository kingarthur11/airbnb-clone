import React from 'react'
import styled from 'styled-components'
import TuneIcon from '@mui/icons-material/Tune';

const BtnTabs = () => {
  
  return (
    <Wrapper>
      <i className="fa fa-angle-left d-none d-lg-block"></i> 
       <ul className='list-unstyled d-flex m-0 p-0'>
        <li>Amazing pools</li>
        <li>Rooms</li>
        <li>Trending</li>
        <li>Rooms</li>
        <li>Trending</li>
        <li>Rooms</li>
        <li>Trending</li>
        <li>Rooms</li>
        <li>Trending</li>
        <li>Rooms</li>
        <li>Trending</li>
        <li>Rooms</li>
        <li>Trending</li>
        <li>Rooms</li>
        <li>Trending</li>
        <li>Amazing views</li>
        <li>Windmils</li>
        <li>Island</li>
        <li>Mansions</li>
        <li>Cycladic homes</li>
        <li>Iconic cities</li>
        <li>Towers</li>
        <li>Bed and breakfast</li>

        <li>Tropical</li>
        <li>Castles</li>
        <li>Designs</li>
        <li>Grand pianos</li>
        <li>Treeehouses</li>
        <li>Camping</li>
        <li>Amazing pools</li>
        <li>Caves</li>
        <li>Off-the-grid</li>
        <li>Top the world</li>
        <li>OMG!</li>
       </ul>
       <i className="fa fa-angle-right d-none d-lg-block"></i> 
       <div className='d-none d-lg-block'>
        <div className='d-flex align-items-center justify-content-between menu-tab'>
            <TuneIcon sx={{ width: 24, height: 24, marginRight: '10px' }} />
            <p className='m-0 p-0'>Filters</p>
        </div>
       </div>
       
    </Wrapper>
    
  )
}

export default BtnTabs

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    .menu-tab {
        padding: 8px 12px;
        border: 1px solid #dddddd;
        border-radius: 21px;
        margin-left: 10px;
    }
    .fa {
      padding: 8px 10px;
      border-radius: 50%;
      background-color: '#ffffff';
      color: '#460479';
      border: 1px solid #dddddd;
    }
    ul {
      overflow-x: scroll;
      /* margin: 0; */
      /* padding: 0; */
      -ms-overflow-style: none !important;
      scrollbar-width: none !important;
      /* scroll-padding: 0 !important;
      scroll-margin: 0 !important; */
      margin: 0 10px !important;
    }
    ul::-webkit-scrollbar {
        background: transparent;
        width: 0px;
    } 
    li {
        font-size: 14px;
        font-weight: 600;
        margin-right: 20px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
    /* 
   
    ul {
      overflow-x: auto;
      overflow: scroll;
    }
    ul::-webkit-scrollbar {
        background: transparent;
        width: 0px;
    } */
    /* padding: 20px 50px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
   
   

    ul::-webkit-scrollbar {
        background: transparent;
        width: 0px;
    } */
    /* li {
        font-size: 14px;
        font-weight: 600;
        margin-right: 20px;
        margin: 0;
        padding: 0;
        
    } */
   
`