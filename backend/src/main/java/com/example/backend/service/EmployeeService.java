package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
=======

import com.example.backend.exception.NoDataFoundException;
import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.exception.ResourceNotFoundException;
>>>>>>> 9781379f51979f9bb95b87a94bf939834c001da0
import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> findAll(){
		return employeeRepository.findAll();
	}
	
	public Employee addEmployee(Employee e) throws RecordAlreadyExistsException{
		if(!employeeRepository.findById(e.getEmployee_id()).isEmpty())
			throw new RecordAlreadyExistsException("Employee ID already exists");
		else
			return employeeRepository.save(e);
	}
	
	public String deleteEmployee(String id) {
		if(!employeeRepository.findById(id).isPresent()) return "Failure";
		employeeRepository.deleteById(id);
		return "Success";
	}
	public Employee updateEmployee(Employee e) {
		employeeRepository.deleteById(e.getEmployee_id());
		return employeeRepository.save(e);
	}
}
