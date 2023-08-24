package com.example.backend.controller;


import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.model.LoginResponse;
import com.example.backend.service.LoginService;
import com.example.backend.service.RegisterService;

@RequestMapping("/api/employee")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class EmployeeController {
	@Autowired 
	LoginService loginService;
	@Autowired
	RegisterService registerService;
	
	@PostMapping("/register")
	public Employee register(@RequestBody @Valid Employee employee) throws RecordAlreadyExistsException{
		return  registerService.register(employee);

	}
	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest loginRequest) throws ResourceNotFoundException {
		return loginService.login(loginRequest);		
	}
	

}
