import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../bootapi/Api';


const Withdraw = () => {

    const[account, setAccount]=useState({});

    const HandleWithdraw=(e)=>{
        withdrawAmount(account);
        e.preventDefault();
    }

    const withdrawAmount=(acc)=>{
        axios.put(`${base_url}/withdraw`,acc).then(
            (response)=>{
                toast.success("Withdraw Success")
            },
            (error)=>{
                console.log(error);
                toast.error("Withdraw failed");
            }
        );
    };
  return (
    <Form onSubmit={HandleWithdraw} className='my-3'>
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
                <Label for="balance">Withdraw Amount - </Label>
                <Input type="number" name='balance' id='balance' placeholder="Enter Amount"
                    onChange={(e)=>{
                        setAccount({...account,bal:e.target.value});
                    }}
                />
            </FormGroup>

            <Container className='text-center my-4'>
                <Button type='submit' outline color='success'>Withdraw Amount</Button>
                <Button type='reset' outline color='warning mx-2'>Clear</Button>
            </Container>
        </Form>
  )
}

export default Withdraw