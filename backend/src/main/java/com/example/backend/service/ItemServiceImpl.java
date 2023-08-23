package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.exception.NoDataFoundException;
import com.example.backend.exception.RecordAlreadyExistsException;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;

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
public class ItemServiceImpl implements ItemService{
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
	
	public List<Item> getAllItems() throws NoDataFoundException{
		List<Item> list = new ArrayList<>();
		
		list= itemRepository.findAll();
		if(!list.isEmpty())
			return list;
		else
			throw new NoDataFoundException("No items found");
	}
	
	@Transactional
	public List<Object> apply(Item item, String id) throws ResourceNotFoundException {
		List<Object> list = new ArrayList<>();
		String type = item.getItemCategory();
		Loan loan = loanRepository.findByLoanType(type);
		int duration = loan.getDuration();
		Optional<Employee> emp = employeeRepository.findById(id);
    	if(!emp.isEmpty())
    	{
    		EmployeeIssue employeeIssue = new EmployeeIssue(new Date(),this.getReturnDate(new Date(), duration),id,item.getItemId());
    		list.add(employeeIssueRepository.save(employeeIssue));
    		EmployeeCard employeeCard = new EmployeeCard(id,loan.getLoan_id(),new Date());
    		list.add(employeeCardRepository.save(employeeCard));
    		return list;
    	}
    	else 
    		throw new ResourceNotFoundException("Employee ID does not exist");

				
	}
	


	public List<PurchasedItem> getItemsById(String id) throws ResourceNotFoundException,NoDataFoundException{
		Optional<Employee> emp = employeeRepository.findById(id);
		if(!emp.isEmpty()) {
			List<PurchasedItem> list= new ArrayList<>();
			employeeIssueRepository.findByEmployeeId(id).forEach((obj)-> list.add(new PurchasedItem(obj.getIssue_id(),itemRepository.findById(obj.getItemId()).get())));
			if(list.size()==0)
				throw new NoDataFoundException("No items found ");
	
			else 
				return list;
		}
		else
			throw new ResourceNotFoundException("Employee ID does not exist");

	
	}
	private Date getReturnDate(Date startDate, int duration) {
		Calendar calendar= Calendar.getInstance();
		calendar.setTime(startDate);
		calendar.add(Calendar.YEAR, duration);
		return calendar.getTime();
	}
	
	public List<Item> findAllItems() throws NoDataFoundException{
		List<Item> list = new ArrayList<Item>();
		list=itemRepository.findAll();
		if(!list.isEmpty())
			return list;
		else 
			throw new NoDataFoundException("No items found");
	}
	
	public Item addItem(Item item) throws RecordAlreadyExistsException{
		if (!itemRepository.findById(item.getItemId()).isEmpty())
			throw new RecordAlreadyExistsException("Item ID already exists");
		else
			return itemRepository.save(item);
	}
	
	public String deleteItem(String id) throws ResourceNotFoundException {
		Optional<Loan> loan = loanRepository.findById(id);
    	if(!loan.isEmpty())
		{
    		employeeIssueRepository.deleteAllByItemId(id);
    		itemRepository.deleteById(id);
    		return "Success";
		}
    	else 
    		throw new ResourceNotFoundException("Itemn Id does not exist");
		
	}
	public Item updateItem(Item item) throws ResourceNotFoundException {
		Optional<Item> it = itemRepository.findById(item.getItemId());
		if(!it.isEmpty())
		{
			itemRepository.deleteById(item.getItemId());
			return itemRepository.save(item);
		}
		else
			throw new ResourceNotFoundException("Item id does not exist");
		
		
	}
}