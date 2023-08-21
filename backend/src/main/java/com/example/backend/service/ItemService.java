package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.exception.NoDataFoundException;
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

import jakarta.transaction.Transactional;

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
	
	@Transactional
	public List<Object> apply(Item item, String id) {
		List<Object> list = new ArrayList<>();
		String type = item.getItemCategory();
		Loan loan = loanRepository.findByLoanType(type);
		int duration = loan.getDuration();
		

		EmployeeIssue employeeIssue = new EmployeeIssue(new Date(),this.getReturnDate(new Date(), duration),id,item.getItemId());
		list.add(employeeIssueRepository.save(employeeIssue));
		EmployeeCard employeeCard = new EmployeeCard(id,loan.getLoan_id(),new Date());
		list.add(employeeCardRepository.save(employeeCard));
	
		return list;		
	}
	
	public List<PurchasedItem> getItemsById(String id) throws NoDataFoundException{
		List<PurchasedItem> list= new ArrayList<>();
		employeeIssueRepository.findByEmployeeId(id).forEach((obj)-> list.add(new PurchasedItem(obj.getIssue_id(),itemRepository.findById(obj.getItemId()).get())));
		if(list.size()==0)
			throw new NoDataFoundException("Employee Id not found ");
		else 
			return list;
		
	}
	private Date getReturnDate(Date startDate, int duration) {
		Calendar calendar= Calendar.getInstance();
		calendar.setTime(startDate);
		calendar.add(Calendar.YEAR, duration);
		return calendar.getTime();
	}
	
	public List<Item> findAllItems(){
		return itemRepository.findAll();
	}
	
	public Item addItem(Item item) {
		return itemRepository.save(item);
	}
	
	public String deleteItem(String id) {
		employeeIssueRepository.deleteAllByItemId(id);
		itemRepository.deleteById(id);
		return "Success";
	}
	public Item updateItem(Item item) {
		itemRepository.deleteById(item.getItemId());
		return itemRepository.save(item);
	}
}