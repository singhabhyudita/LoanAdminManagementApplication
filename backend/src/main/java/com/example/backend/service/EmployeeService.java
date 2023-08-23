package com.example.backend.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.backend.exception.NoDataFoundException;
import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;

import com.example.backend.repository.EmployeeRepository;

@Service
public interface EmployeeService {
	public List<Employee> findAll()throws NoDataFoundException;
	public Employee addEmployee(Employee e) throws RecordAlreadyExistsException;
	public String deleteEmployee(String id) throws ResourceNotFoundException;
	public Employee updateEmployee(Employee e) throws ResourceNotFoundException;
	

}