package com.bankingApplication.CustomerHelper.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.bankingApplication.CustomerHelper.beans.Accounts;
import com.bankingApplication.CustomerHelper.services.CustomerServices;

@RestController
@CrossOrigin
public class MyController {
	
	@Autowired
	public CustomerServices cs;
	
	@GetMapping("/")
//	public List<Accounts> getAccounts(){
//		return this.cs.getAccounts();} 
	public ResponseEntity<List<Accounts>> getAccounts(){
		List<Accounts> accounts = cs.getAccounts();
		if(accounts.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // When list in empty is says "404 Not Found"
		}
		return ResponseEntity.of(Optional.of(accounts));
	}
	
	
	@GetMapping("/{accno}")
//	public Accounts getAccount(@PathVariable int accno) {
//		return this.cs.getAccounts(accno);}
	public ResponseEntity<Accounts> getAccounts(@PathVariable int accno){
		Accounts account = cs.getAccounts(accno);
		if(account == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(account));
	}
	
	@PostMapping("/")
//	public Accounts addAccount(@RequestBody Accounts account) {
//		return this.cs.addAccount(account);}
	public ResponseEntity<Accounts> addAccount(@RequestBody Accounts account){
//		Accounts acc = null;
		try {
//			acc = 
					this.cs.addAccount(account);
			System.out.println(account);
			return ResponseEntity.status(HttpStatus.CREATED).build();
//			return ResponseEntity.of(Optional.of(acc));
		} catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	@PutMapping("/")
//	public Accounts updateAccoutn(@RequestBody Accounts account) {
//		return this.cs.updateAccount(account);}
	public ResponseEntity<Accounts> updateAccount(@RequestBody Accounts account){
		try {
			this.cs.updateAccount(account);
			return ResponseEntity.ok().body(account);
		} catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	
	@PutMapping("/deposit")
//	public Accounts depositAmount(@RequestBody Accounts account) {
//		return this.cs.depositAmount(account);}
	public ResponseEntity<Accounts> depositAmount(@RequestBody Accounts account){
		Accounts acc = null;
		try {
			acc = this.cs.depositAmount(account);
			return ResponseEntity.ok().body(acc);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PutMapping("/withdraw")
//	public Accounts withdrawAmount(@RequestBody Accounts account) {
//		return this.cs.withdrawAmount(account);}
	public ResponseEntity<Accounts> withdrawAmount(@RequestBody Accounts account){
		Accounts acc = null;
		try {
			acc = this.cs.withdrawAmount(account);
			return ResponseEntity.ok().body(acc);
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			
		}
	}
	
	@DeleteMapping("/{accno}")
	public ResponseEntity<String> deleteAccount(@PathVariable int accno) {
		try {
			this.cs.deleteAccount(accno);
//			return ResponseEntity.ok().build();
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
//		return this.cs.deleteAccount(accno);
	}
}
