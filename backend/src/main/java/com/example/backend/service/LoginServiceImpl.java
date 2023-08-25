package com.example.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.model.LoginResponse;
import com.example.backend.repository.EmployeeRepository;

@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	EmployeeRepository employeeRepo;

	public LoginResponse login(LoginRequest loginRequest) throws ResourceNotFoundException {
		Optional<Employee> emp = employeeRepo.findById(loginRequest.getLoginId());
		if (!emp.isEmpty()) {
			if (emp.get().getPassword().equals(loginRequest.getPassword())) {
				return new LoginResponse(emp.get().getEmployee_id(), emp.get().getEmployee_name());
			} else
				throw new ResourceNotFoundException("Invalid credentials");
		} else
			throw new ResourceNotFoundException("No employee found with the given credentials");
	}

}
