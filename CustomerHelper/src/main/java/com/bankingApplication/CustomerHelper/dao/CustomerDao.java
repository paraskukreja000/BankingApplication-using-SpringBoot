package com.bankingApplication.CustomerHelper.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bankingApplication.CustomerHelper.beans.Accounts;

public interface CustomerDao extends JpaRepository<Accounts, Integer>{

}
