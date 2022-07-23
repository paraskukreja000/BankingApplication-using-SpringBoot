package com.bankingApplication.CustomerHelper.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bankingApplication.CustomerHelper.beans.Accounts;
import com.bankingApplication.CustomerHelper.dao.CustomerDao;

@Service
public class CustomerServiceImpl implements CustomerServices{
	
	@Autowired
	private CustomerDao cd;
	
//	List<Accounts> accounts;
	
	public CustomerServiceImpl() {
//		accounts = new ArrayList<>();
//		accounts.add(new Accounts("Paras",1001, 1000));
//		accounts.add(new Accounts("Shubham", 1002, 1500));
	}

	@Override
	public List<Accounts> getAccounts() {
		return cd.findAll();
	}

	@Override
	public Accounts getAccounts(int accno) {
		Accounts account = null;	// Here we use this method to prevent "500 Internal Server Error" exception
		try {
			account = cd.findById(accno).get();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return account;
		
//		Optional<Accounts> account = cd.findById(accno);
//		if(account.isEmpty()) {
//			throw new RuntimeException(accno+" not found");
//		}
//		return account.get();
	}

	@Override
	public Accounts addAccount(Accounts account) {
		if(account.getName() == null) {
			return null;
		}
		cd.save(account);
		return account;
	}

	@Override
	public Accounts updateAccount(Accounts account) {
		cd.save(account);
		return account;
	}

	@Override
	public String deleteAccount(int accno) {
		cd.deleteById(accno);
//		return cd.findById(accno).get();
		return accno+" Delete Successfull";
		
	}

	@Override
	public Accounts depositAmount(Accounts account) {		
		Accounts ac = cd.findById(account.getAccno()).get();
		ac.setAccno(account.getAccno());
		ac.setName(ac.getName());
		ac.setBal(ac.getBal() + account.getBal());
		cd.save(ac);
		return cd.findById(account.getAccno()).get();
	}

	@Override
	public Accounts withdrawAmount(Accounts account) {
		Accounts ac = cd.findById(account.getAccno()).get();
		if(ac.getBal()>=account.getBal()) {
			ac.setAccno(account.getAccno());
			ac.setName(ac.getName());
			ac.setBal(ac.getBal() - account.getBal());
			cd.save(ac);
		}
		return ac;
	}
	
}
