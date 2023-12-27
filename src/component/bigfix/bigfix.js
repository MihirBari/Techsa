import React from 'react'
import { Summary } from './summary'
import { Patch } from './Patch'
import { Workspace } from './Workspace'
import { Compliance } from './Compliance'
import { Inventory } from './Inventory'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';


const Bigfixs = () => {
  return (
    <>
    <div>

    <Helmet>
            <title>Bigfix | Techsa Services Pvt Ltd.</title>
            <meta name="description" content="Description of your About Us page" />
          </Helmet>
    <h2 style={{ textAlign: "center" }}>BIGFIX</h2>
     <Summary />
     <h2 style={{ textAlign: "center",margin:"20px 0 40px 0" }}>Feature solution</h2>
     <Patch />
     <div style={{ margin:"40px 0 40px 0" }}>
     <Workspace />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Compliance />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Inventory />
     </div>

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

export default Bigfixs