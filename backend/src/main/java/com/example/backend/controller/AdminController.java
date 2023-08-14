package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Admin;
import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.service.AdminLoginService;
import com.example.backend.service.LoginService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class AdminController {
	@Autowired AdminLoginService loginService;
	
	@PostMapping("/adminLogin")
	public String login(@RequestBody LoginRequest loginRequest) {
		System.out.println(loginRequest.getLoginId());
		return loginService.login(loginRequest);		
	}

}
