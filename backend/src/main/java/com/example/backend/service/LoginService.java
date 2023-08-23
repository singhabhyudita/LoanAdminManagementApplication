package com.example.backend.service;


import org.springframework.stereotype.Service;

import com.example.backend.model.LoginRequest;


import com.example.backend.model.LoginRequest;

@Service
public interface LoginService {
	public String login(LoginRequest loginRequest);
	

}
