package com.bankingApplication.CustomerHelper.services;

import java.util.List;
import com.bankingApplication.CustomerHelper.beans.Accounts;

public interface CustomerServices {
	public List<Accounts> getAccounts();
	
	public Accounts getAccounts(int accno);
	
	public Accounts addAccount(Accounts account);
	
	public Accounts updateAccount(Accounts account);
	
	public String deleteAccount(int accno); 
	
	public Accounts depositAmount(Accounts account);
	
	public Accounts withdrawAmount(Accounts account);
}
