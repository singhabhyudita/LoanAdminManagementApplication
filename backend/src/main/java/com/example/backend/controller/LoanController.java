package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.EmployeeCard;
import com.example.backend.model.Loan;
import com.example.backend.service.LoanService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class LoanController {
	
	@Autowired
	LoanService loanService;
	
//	@GetMapping("/showAll")
//	public List<Loan> getLoanTypes(){
//		
//	}
	@PostMapping("/apply/{id}")
	public EmployeeCard applyLoan(@RequestBody Loan loan, @PathVariable String id) {
		return loanService.applyLoan(loan,id);
	}
	
	@GetMapping("/loan/{id}")
	public List<Loan> getAllLoanCards(@PathVariable String id){
		return loanService.getAllLoanCards(id);
		
	}

}
