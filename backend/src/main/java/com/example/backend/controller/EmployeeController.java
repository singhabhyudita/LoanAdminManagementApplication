package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.service.LoginService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class EmployeeController {
	@Autowired LoginService loginService;
	
	@PostMapping("/login")
	public Employee login(@RequestBody LoginRequest loginRequest) {
		System.out.println("Request received");
		return loginService.login(loginRequest);		
	}

}
