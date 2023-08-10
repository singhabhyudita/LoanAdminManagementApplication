package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.repository.EmployeeRepository;

@Service
public class LoginService {
	@Autowired 
	EmployeeRepository employeeRepository;
	
	public Employee login(LoginRequest loginRequest) {
		Employee employee = employeeRepository.findById(loginRequest.getEmployee_id()).get();
		if(employee.getPassword().equals(loginRequest.getPassword()))return employee;
		return null;
	}
}
