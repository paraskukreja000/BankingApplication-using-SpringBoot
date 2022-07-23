import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
import base_url from '../bootapi/Api'

const Account = ({account, updateAccounts}) => {
    const deleteAccount=(accno)=>{
        axios.delete(`${base_url}/${accno}`).then(
            (response)=>{
                toast.success("Account Deleted");
                updateAccounts(accno);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    // const updateAccount=(account)=>{
    //     axios.put(`${base_url}/`,account).then(
    //         (response)=>{
    //             toast.success(account.accno+" Updated");
    //         },
    //         (error)=>{
    //             console.log(error);
    //             toast.error("Something went wrong");
    //         }
            
    //     )
    // }
  return (
    <div className='text-center'>
        <Card className='my-2'>
            <CardBody>
                <CardTitle>{account.name}</CardTitle>
                <CardSubtitle>Account no: {account.accno}</CardSubtitle>
                <CardText>Balance: {account.bal}</CardText>

                <Container>
                    <Button color='danger'
                        onClick={()=>{deleteAccount(account.accno)}}
                    >Delete</Button>
                    {/* <Button color='warning' className='mx-2'
                        onClick={()=>{updateAccounts(account)}}
                    >Update</Button> */}
                </Container>
            </CardBody>
        </Card>
    </div>
  )
}

export default Account