import React from 'react'
import { Summary } from './Summary'
import {Products} from './Products'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";


export const Tenable = () => {

   
  return (
    <>

    <div>
    
    <h2 style={{ textAlign: "center" }}>TENABLE</h2>
    <Summary />
    <Products />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/Contact">
          <Button className="custom-button">
            Request Demo <FaLongArrowAltRight />
          </Button>
        </Link>
      </div>
    </div>
  </>
  )
}

