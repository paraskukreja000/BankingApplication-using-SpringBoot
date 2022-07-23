import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import base_url from '../bootapi/Api';

const Deposit = () => {

    const[account, setAccount]=useState({});

    const HandleDeposit=(e)=>{
        depositAmount(account);
        e.preventDefault();
    }
    const depositAmount=(acc)=>{
        axios.put(`${base_url}/deposit`,acc).then(
            (response)=>{
                toast.success("Deposit Success");
                console.log(response);
                console.log("Success");
            },
            (error)=>{
                console.log(error);
                toast.error("Deposit failed");
            }
        );
    };

    // useEffect(()=>{
    //     depositAmount(account);
    // },[]);

    return (
        <Form onSubmit={HandleDeposit} className='my-3'>
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
                <Label for="balance">Deposit Amount - </Label>
                <Input type="number" name='balance' id='balance' placeholder="Enter Amount" 
                    onChange={(e)=>{
                        setAccount({...account,bal:e.target.value});
                    }}
                />
            </FormGroup>

            <Container className='text-center my-4'>
                <Button type='submit' outline color='success'>Add Amount</Button>
                <Button type='reset' outline color='warning mx-2'>Clear</Button>
            </Container>
        </Form>
    )
}

export default Deposit