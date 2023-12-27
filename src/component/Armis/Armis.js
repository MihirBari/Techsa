import React from 'react'
import { Summary } from './Summary'
import { AssetManagement } from './AssetManagement'
import { IoTSecurity } from './IoTSecurity'
import { DeviceSecurity } from './DeviceSecurity'
import { Remediation } from './Remediation'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Armis = () => {
  return (
    <>
    <div>
    <h2 style={{ textAlign: "center" }}>ARMIS</h2>
     <Summary />
     <h2 style={{textAlign:'center'}}>Featured Solutions</h2>
     <div style={{ margin:"40px 0 40px 0" }}>
     <AssetManagement />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <IoTSecurity />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <DeviceSecurity />
     </div>
     <div style={{ margin:"40px 0 40px 0" }}>
     <Remediation />
     </div>
     <div style={{ textAlign: "center", marginTop: "20px" }}>
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
