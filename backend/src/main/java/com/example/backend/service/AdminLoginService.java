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
	
	public Admin login(LoginRequest loginRequest) {
		System.out.println(loginRequest.getLogin_id());
		
		Optional<Admin> admin= adminRepo.findById(loginRequest.getLogin_id());
		System.out.println(loginRequest.getLogin_id());
		if(admin.isPresent())
			if(admin.get().getPassword().equals(loginRequest.getPassword()))return admin.get();
		return null;
		
	}

}
