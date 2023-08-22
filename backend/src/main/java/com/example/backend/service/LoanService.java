package com.example.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.model.Loan;
import com.example.backend.model.LoanAvailed;
import com.example.backend.repository.EmployeeCardRepository;
import com.example.backend.repository.LoanRepository;

@Service
public class LoanService {
	
	@Autowired
	EmployeeCardRepository employeeCardRepository;
	
	@Autowired
	LoanRepository loanRepository;
	
	public List<LoanAvailed> getItemsById(String id) {
		List<LoanAvailed> list = new ArrayList<>();
		employeeCardRepository.findByEmployeeId(id).forEach((obj)-> list.add(new LoanAvailed(loanRepository.findById(obj.getLoanId()).get(),obj.getCardIssueDate())));
		return list;	
	}
	
	public List<Loan> findAllLoans(){
		return loanRepository.findAll();
	}
	
	public Loan addLoan(Loan loan) throws RecordAlreadyExistsException{
		if(!loanRepository.findById(loan.getLoan_id()).isEmpty())
			throw new RecordAlreadyExistsException("Loan ID already exists");
		else
			return loanRepository.save(loan);
	}
	
	public String deleteLoan(String id) {
		employeeCardRepository.deleteAllByLoanId(id);
		loanRepository.deleteById(id);
		return "Success";
	}
	
	public Loan updateLoan(Loan loan) {
		loanRepository.deleteById(loan.getLoan_id());
		return loanRepository.save(loan);
	}
	public List<String> getCategories(){
		List<String> list = loanRepository.findDistinctLoanTypes();
		return list;
	}
	
}
