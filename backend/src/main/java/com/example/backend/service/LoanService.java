package com.example.backend.service;

import java.util.List;

import com.example.backend.exception.NoDataFoundException;
import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Loan;
import com.example.backend.model.LoanAvailed;

public interface LoanService {
	public List<LoanAvailed> getItemsById(String id) throws ResourceNotFoundException,NoDataFoundException;
	public List<Loan> findAllLoans()throws NoDataFoundException;
	public Loan addLoan(Loan loan) throws RecordAlreadyExistsException;
	public String deleteLoan(String id) throws ResourceNotFoundException;
	public Loan updateLoan(Loan loan) throws ResourceNotFoundException;
	public List<String> getCategories()throws NoDataFoundException;

}
