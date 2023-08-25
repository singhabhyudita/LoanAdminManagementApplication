package com.example.backend.service;

import org.springframework.stereotype.Service;

import com.example.backend.exception.ResourceNotFoundException;

import com.example.backend.model.LoginRequest;
import com.example.backend.model.LoginResponse;

@Service
public interface LoginService {
	public LoginResponse login(LoginRequest loginRequest) throws ResourceNotFoundException;
	
}
