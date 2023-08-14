package com.example.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Admin;
import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.repository.AdminRepository;

@Service
public class AdminLoginService {
	@Autowired
	private AdminRepository adminRepo;
	
	public String login(LoginRequest loginRequest) {
		System.out.println(loginRequest.getLoginId());
		
		Optional<Admin> admin= adminRepo.findById(loginRequest.getLoginId());
		System.out.println(loginRequest.getLoginId());
		if(admin.isPresent())
			if(admin.get().getPassword().equals(loginRequest.getPassword()))return admin.get().getAdmin_id();
			else return "Password not matching";
		return "Invalid user";
		
	}

}
