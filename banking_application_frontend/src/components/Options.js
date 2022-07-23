import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

const Options = () => {
  return (
      <ListGroup>
          <Link className='list-group-item list-group-item-action' tag="a" to="/">Home</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/accounts">All Accounts</Link>
          {/* <Link className='list-group-item list-group-item-action' tag="a" to="/your-account">Your Account</Link> */}
          <Link className='list-group-item list-group-item-action' tag="a" to="/add-account">Add Account</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/deposit">Deposit Money</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/withdraw">Withdraw Money</Link>
      </ListGroup>
  )
}

export default Options