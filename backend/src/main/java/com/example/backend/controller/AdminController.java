package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.exception.NoDataFoundException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.model.Item;
import com.example.backend.model.Loan;
import com.example.backend.model.LoginRequest;
import com.example.backend.service.AdminLoginService;
import com.example.backend.service.AdminLoginServiceImpl;
import com.example.backend.service.EmployeeService;
import com.example.backend.service.ItemService;
//import com.example.backend.service.EmployeeServiceImpl;
import com.example.backend.service.ItemServiceImpl;
import com.example.backend.service.LoanService;


@RequestMapping("/api/admin")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class AdminController {
	@Autowired
	AdminLoginService loginService;
	
	@Autowired
	EmployeeService employeeService;
	
	@Autowired
	LoanService loanService;
	
	@Autowired
	ItemService itemService;
	
	@PostMapping("/login")
	public String login(@RequestBody LoginRequest loginRequest) {
		System.out.println(loginRequest.getLoginId());
		return loginService.login(loginRequest);		
	}
	
	@GetMapping("/all")
	public List<Employee>findAll() throws NoDataFoundException{
		return employeeService.findAll();
	}
	
	@PostMapping("/add")
	public Employee addEmployee(@RequestBody Employee e) throws RecordAlreadyExistsException{
		return employeeService.addEmployee(e);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployee(@PathVariable String id) throws ResourceNotFoundException {
		return employeeService.deleteEmployee(id);
	}
	
	@PutMapping("/update")
	public Employee updateEmployee(@RequestBody Employee e) throws ResourceNotFoundException{
		return employeeService.updateEmployee(e);
	}
	
	@GetMapping("/loans/all")
	public List<Loan> findAllLoans() throws NoDataFoundException{
		return loanService.findAllLoans();
	}
	
	@PostMapping("/loans/add")
	public Loan addLoan(@RequestBody Loan loan) throws RecordAlreadyExistsException{
		return loanService.addLoan(loan);
	}
	
	@DeleteMapping("/loans/delete/{id}")
	public String deleteLoan(@PathVariable String id) throws ResourceNotFoundException{
		return loanService.deleteLoan(id);
	}
	
	@PutMapping("/loans/update")
	public Loan updateLoan(@RequestBody Loan loan) throws ResourceNotFoundException{
		return loanService.updateLoan(loan);
	}
	
	@GetMapping("/items/all")
	public List<Item> findAllItems() throws NoDataFoundException{
		return itemService.findAllItems();
	}
	
	@PostMapping("/items/add")
	public Item addItem(@RequestBody Item item) throws RecordAlreadyExistsException {
		return itemService.addItem(item);
	}
	
	@DeleteMapping("/items/delete/{id}")
	public String deleteItem(@PathVariable String id) throws ResourceNotFoundException {
		return itemService.deleteItem(id);
	}
	@PutMapping("/items/update")
	public Item updateItem(@RequestBody Item item) throws ResourceNotFoundException {
		return itemService.updateItem(item);
	}
	@GetMapping("/items/getCategory")
	public List<String> getCategory()throws NoDataFoundException{
		return loanService.getCategories();
	}
}
