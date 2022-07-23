import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import base_url from '../bootapi/Api';

const AddAccount = () => {
    
    const[account, setAccount]=useState({});

    const HandleAddAccount=(e)=>{
        addAccount(account);
        e.preventDefault();
    }

    const addAccount=(acc)=>{
        axios.post(`${base_url}/`,acc).then(
            (response)=>{
                toast.success("Account added successfully");
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }
  return (
    <Form onSubmit={HandleAddAccount} className='my-3'>
        <FormGroup>
            <Label for="accno">Account Number - </Label>
            <Input type="text" name='accountNumber' id='accno' placeholder="Enter Your Account Number"
                onChange={(e)=>{
                    setAccount({...account,accno:e.target.value});
                }}
            />
        </FormGroup>

        <FormGroup>
            <Label for="name">Account Holder Name - </Label>
            <Input type="text" name='name' id='name' placeholder="Enter Your Name"
                onChange={(e)=>{
                    setAccount({...account,name:e.target.value});
                }}
            />
        </FormGroup>
        
        <FormGroup>
            <Label for="balance">Initial Deposit Balance - </Label>
            <Input type="number" name='balance' id='balance' placeholder="Enter Initial balance"
                onChange={(e)=>{
                    setAccount({...account,bal:e.target.value});
                }}
            />
        </FormGroup>
        
        <Container className='text-center my-4'>
            <Button type='submit' color='success'>Add Account</Button>
            <Button type='reset' color='warning mx-2'>Clear</Button>
        </Container>
    </Form>
  )
}

export default AddAccount