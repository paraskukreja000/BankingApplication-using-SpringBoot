import React from 'react'
import './Home.css'
import { Container } from 'reactstrap'

const Home = () => {
  return (
    <div className='text-center my-5'>
        <Container>
        <h2 className="my-3">Welcome To our Banking Application</h2>
            <h6>Here you can add, remove and manage Bank Accounts</h6>
            <div className="homePage-details">
              <p>- You can see all available account from "All Accounts" section</p>
              <p>- You can add a new Account from "Add Account" section</p>
              <p>- You can Deposit money in a account from "Deposit Money" Section</p>
              <p>- You can Withdraw money in a account from "Withdraw Money" Section</p>
            </div>
        </Container>
    </div>
  )
}

export default Home