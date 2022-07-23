import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Account from './Account'
import base_url from '../bootapi/Api';
import { toast } from 'react-toastify';

const AllAccounts = () => {
    const [accounts, setAccount]=useState({});
        // {accno: 101, name: "Paras", bal: 1000},
        // {accno: 102, name: "Shubham", bal: 1100}
    // ]);

    const getAllAccounts=()=>{
        axios.get(`${base_url}/`).then(
            (response)=>{
                toast.success("Accounts Updated");
                setAccount(response.data);
            },
            (error)=>{
                toast.error("No Data Found");
                console.log(error);
            }
        );
    };

    useEffect(()=>{
        getAllAccounts();
    }, []);

    const updateGetAllAccounts=(accno)=>{
        setAccount(accounts.filter=(
            (a)=>a.accno!=accno)
        );
    };

  return (
    <div>
        {
            accounts.length>0 ?
                accounts.map((acc)=><Account key={acc.accno} account={acc} updateAccounts={updateGetAllAccounts}/>)
                :
                "No Account Found"
        }
    </div>
  )
}

export default AllAccounts;