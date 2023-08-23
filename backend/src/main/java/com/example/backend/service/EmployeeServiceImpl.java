package com.example.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.example.backend.exception.NoDataFoundException;
import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeCardRepository;
import com.example.backend.repository.EmployeeIssueRepository;
import com.example.backend.repository.EmployeeRepository;

@Service

public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Autowired
	EmployeeIssueRepository employeeIssueRepository;
	
	@Autowired
	EmployeeCardRepository employeeCardRepository;
	
	public List<Employee> findAll()throws NoDataFoundException{
		List<Employee> list = new ArrayList<>();
				
		list= employeeRepository.findAll();
		if(!list.isEmpty())
			return list;
		else
			throw new NoDataFoundException("No employees found");
	}
	
	public Employee addEmployee(Employee e) throws RecordAlreadyExistsException{
		if(!employeeRepository.findById(e.getEmployee_id()).isEmpty())
			throw new RecordAlreadyExistsException("Employee ID already exists");
		else
			return employeeRepository.save(e);
	}
	
	public String deleteEmployee(String id) throws ResourceNotFoundException{
		Optional<Employee> em = employeeRepository.findById(id);
		if(!em.isEmpty()) {
			employeeIssueRepository.deleteAllByEmployeeId(id);
			employeeCardRepository.deleteAllByEmployeeId(id);
			employeeRepository.deleteById(id);
			return "Success";
		}
		else 
			throw new ResourceNotFoundException("Employee Id does not exist");
		
	}
	public Employee updateEmployee(Employee e) throws ResourceNotFoundException {
		Optional<Employee> em = employeeRepository.findById(e.getEmployee_id());
		if(!em.isEmpty()) {
			employeeRepository.deleteById(e.getEmployee_id());
			return employeeRepository.save(e);
		}
		else 
			throw new ResourceNotFoundException("Employee Id does not exist");
	}

}
