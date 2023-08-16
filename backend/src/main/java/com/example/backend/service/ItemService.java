package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.EmployeeCard;
import com.example.backend.model.EmployeeIssue;
import com.example.backend.model.Item;
import com.example.backend.model.Loan;
import com.example.backend.model.PurchasedItem;
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
	
	public List<Object> apply(Item item, String id) {
		List<Object> list = new ArrayList<>();
		String type = item.getItem_category();
		Loan loan = loanRepository.findByLoanType(type);
		int duration = loan.getDuration();
		System.out.println(item);
		System.out.println(id);
		EmployeeIssue employeeIssue = new EmployeeIssue(new Date(),this.getReturnDate(new Date(), duration),id,item.getItemId());
		list.add(employeeIssueRepository.save(employeeIssue));
		
		EmployeeCard employeeCard = new EmployeeCard(id,loan.getLoan_id(),new Date());
		list.add(employeeCardRepository.save(employeeCard));
	
		return list;		
	}
	
	public List<PurchasedItem> getItemsById(String id){
		List<PurchasedItem> list= new ArrayList<>();
		employeeIssueRepository.findByEmployeeId(id).forEach((obj)-> list.add(new PurchasedItem(obj.getIssue_id(),itemRepository.findById(obj.getItemId()).get())));
		return list;
	}
	private Date getReturnDate(Date startDate, int duration) {
		Calendar calendar= Calendar.getInstance();
		calendar.setTime(startDate);
		calendar.add(Calendar.YEAR, duration);
		return calendar.getTime();
	}
	
}