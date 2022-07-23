This is a Bank Application API where you can check Bank Account details, deposit and withdraw money from accounts.

Note - Here we use H2 database, which will go empty whenever we restart/rerun API

-> Format - 
	accno - Account number	(Unique) (Integer)
	name - Account holder name	(String)
	bal - Balance	(Double)
	
	{port} - use your port on which API is running. ex - 8080

-> syntax -
	{
		"accno": {Integer},
		"name": {String},
		"bal": {Double}
	}

---------------------GET Request---------------------

-> To Get/View all accounts - http://localhost:{port}/ 
	ex - http://localhost:8080/
	
-> To Get/View a specific account - http://localhost:{port}/{accno}
	ex - http://localhost:8080/1001


-----------For POST and PUT data use format - Body > raw > JSON-------------

-> To Post/Add New bank account - http://localhost:{port}/
   
	ex - {
		 	"accno": 1001,
		 	"name": "Paras",
			"bal": 15000
	   	 }
	   	 
-> To Put/Update details - http://localhost:{port}/
	(It match account no and update details of that account. You can update balance or name, just pass new details)
	ex - {
		 	"accno": 1001,
		 	"name": "Paras",
			"bal": 15000
	   	 }
	   	 
-> To Deposit Amount - PUT request - http://localhost:{port}/deposit
	(Pass account number in which you want to deposit and how much money you want to deposit)
	ex - {
		 	"accno": 1001,
			"bal": 5000
	   	 }

-> To Withdraw Amount - PUT request - http://localhost:{port}/withdraw
	(Pass account number from which you want to Withdraw and how much money you want to Withdraw)
	ex - {
		 	"accno": 1001,
			"bal": 5000
	   	 }
	   	 
---------------------DELETE Request---------------------
-> To Delete Account - http://localhost:{port}/{accno}
	(Pass account number which you want to delete)
	ex - http://localhost:8080/1001



