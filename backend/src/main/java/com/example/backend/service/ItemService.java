package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Item;
import com.example.backend.repository.EmployeeIssueRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.repository.ItemRepository;
import java.util.*;

@Service
public class ItemService {
	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	EmployeeIssueRepository employeeIssueRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Item> getAllItems(){
		return itemRepository.findAll();
	}
	
	public String apply(Item item, String id) {
		return "";		
	}
	public List<Item> getItemsById(String id){
		List<Item> list= new ArrayList<>();
	//	employeeIssueRepository.findByEmployee(employeeRepository.findById(id).get()).forEach((obj)-> list.add(obj.getItem()));
		return list;
	}
	
}