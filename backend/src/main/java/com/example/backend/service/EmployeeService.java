package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> findAll(){
		return employeeRepository.findAll();
	}
	
	public Employee addEmployee(Employee e) {
		return employeeRepository.save(e);
	}
	
	public String deleteEmployee(String id) {
		employeeRepository.deleteById(id);
		return "Success";
	}
	public Employee updateEmployee(Employee e) {
		employeeRepository.deleteById(e.getEmployee_id());
		return employeeRepository.save(e);
	}
}
