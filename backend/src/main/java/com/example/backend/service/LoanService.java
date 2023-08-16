package com.example.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
}
