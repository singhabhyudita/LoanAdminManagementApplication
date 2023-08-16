package com.example.backend.service;

import java.util.ArrayList;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Loan;
import com.example.backend.model.EmployeeCard;
import com.example.backend.model.EmployeeLoanKey;
import com.example.backend.repository.EmployeeCardRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.repository.LoanRepository;

@Service
public class LoanService {
	@Autowired
	LoanRepository loanRepository;
	
	@Autowired
	EmployeeCardRepository employeeCardRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public EmployeeCard applyLoan(Loan loan, String id) {
		loanRepository.save(loan);
		return employeeCardRepository.save(new EmployeeCard(new EmployeeLoanKey(id,loan.getLoan_id()),employeeRepository.findById(id).get(),loan,new Date()));
	}
	
	public ArrayList<Loan> getAllLoanCards(String id){
		ArrayList<Loan> loans = new ArrayList<>();
		employeeCardRepository.findByEmployee(employeeRepository.findById(id).get()).forEach((obj)->loans.add(obj.getLoan()));
		return loans;
	}
}
