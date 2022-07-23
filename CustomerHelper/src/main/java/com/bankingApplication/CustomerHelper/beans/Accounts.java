package com.bankingApplication.CustomerHelper.beans;

// POJO - Plain old Java object
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Accounts {
	
	@Id
	private int accno;
	private String name;
	private double bal;
	
	public Accounts() { 	super();	}
	public Accounts(String name, int accno, double bal) {
		super();
		this.name = name;
		this.accno = accno;
		this.bal = bal;
	}
	public String getName() {	return name;	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAccno() {
		return accno;
	}
	public void setAccno(int accno) {
		this.accno = accno;
	}
	public double getBal() {
		return bal;
	}
	public void setBal(double bal) {
		this.bal = bal;
	}
	
	@Override
	public String toString() {
		return "Accounts [name=" + name + ", accno=" + accno + ", bal=" + bal + "]";
	}
}
