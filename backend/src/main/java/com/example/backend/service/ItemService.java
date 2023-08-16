package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.EmployeeIssue;
import com.example.backend.model.Item;
import com.example.backend.model.Loan;
import com.example.backend.repository.EmployeeCardRepository;
import com.example.backend.repository.EmployeeIssueRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.repository.ItemRepository;
import com.example.backend.repository.LoanRepository;

import java.util.*;

@Service
public class ItemService {
	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	EmployeeIssueRepository employeeIssueRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	EmployeeCardRepository employeeCardRepository;
	
	@Autowired
	LoanRepository loanRepository;
	
	public List<Item> getAllItems(){
		return itemRepository.findAll();
	}
	
	public String apply(Item item, String id) {
		String type = item.getItem_category();
		Loan loan = loanRepository.findByLoanType(type);
		int duration = loan.getDuration();
//		EmployeeIssue employeeIssue = new EmployeeIssue(id,loan.getLoan_id(),new Date(),this.getReturnDate(new Date(), duration));
//		employeeIssueRepository.save(employeeIssue);
		
		
		return "";		
	}
	public List<Item> getItemsById(String id){
		List<Item> list= new ArrayList<>();
		//employeeIssueRepository.findByEmployeeId(id).forEach((obj)-> list.add(obj.getItem()));
		return list;
	}
	private Date getReturnDate(Date startDate, int duration) {
		Calendar calendar= Calendar.getInstance();
		calendar.setTime(startDate);
		calendar.add(Calendar.YEAR, duration);
		return calendar.getTime();
	}
	
}