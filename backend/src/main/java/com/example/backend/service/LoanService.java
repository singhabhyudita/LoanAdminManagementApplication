package com.example.backend.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.model.EmployeeCard;
import com.example.backend.model.EmployeeIssue;
import com.example.backend.model.Loan;
import com.example.backend.model.LoanAvailed;
import com.example.backend.repository.EmployeeCardRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.repository.LoanRepository;

@Service
public class LoanService {
	
	@Autowired
	EmployeeCardRepository employeeCardRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	LoanRepository loanRepository;
	
	public List<LoanAvailed> getItemsById(String id) throws ResourceNotFoundException {
		List<LoanAvailed> list = new ArrayList<>();
		
		
		Optional<Employee> emp = employeeRepository.findById(id);
    	if(emp!=null)
    	{
    		employeeCardRepository.findByEmployeeId(id).forEach((obj)-> list.add(new LoanAvailed(loanRepository.findById(obj.getLoanId()).get(),obj.getCardIssueDate())));
    	
    		return list;
    	}	
    	else
    		throw new ResourceNotFoundException("Employee Id does not exist");
	}
	
	public List<Loan> findAllLoans(){
		return loanRepository.findAll();
	}
	
	public Loan addLoan(Loan loan) {
		return loanRepository.save(loan);
	}
	
	public String deleteLoan(String id) throws ResourceNotFoundException {
		Optional<Loan> loan = loanRepository.findById(id);
    	if(loan!=null)
    	{
    		employeeCardRepository.deleteAllByLoanId(id);
    		loanRepository.deleteById(id);
    		return "Success";
    	}	
    	else
    		throw new ResourceNotFoundException("Loan Id does not exist");
	}
	
	public Loan updateLoan(Loan loan) throws ResourceNotFoundException{
		Optional<Loan> ln = loanRepository.findById(loan.getLoan_id());
    	if(loan!=null)
    	{
			loanRepository.deleteById(loan.getLoan_id());
			return loanRepository.save(loan);
    	}
    	else
    		throw new ResourceNotFoundException("Loan Id does not exist");
    	
	}
	public List<String> getCategories(){
		List<String> list = loanRepository.findDistinctLoanTypes();
		return list;
	}
	
}
