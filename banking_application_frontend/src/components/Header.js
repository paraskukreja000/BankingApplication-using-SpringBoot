import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

const Header = ({title}) => {
  return (
    <div className='text-center'>
      <Card className='bg-info'>
        <CardBody>
          {/* <h1>Welcome to Local Bank</h1> */}
          <h1>{title}</h1>
        </CardBody>
      </Card>
    </div>
  )
}

export default Header