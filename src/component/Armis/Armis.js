import React from 'react'
import { Summary } from './Summary'
import { AssetManagement } from './AssetManagement'
import { IoTSecurity } from './IoTSecurity'
import { DeviceSecurity } from './DeviceSecurity'
import { Remediation } from './Remediation'

export const Armis = () => {
  return (
    <>
    <h2 style={{ textAlign: "center" }}>ARMIS</h2>
     <Summary />
 
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
  </>
  )
}
