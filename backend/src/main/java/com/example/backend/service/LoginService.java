package com.example.backend.service;



import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.example.backend.exception.ResourceNotFoundException;

import org.springframework.stereotype.Service;


import com.example.backend.model.LoginRequest;
import com.example.backend.model.LoginResponse;

@Service

public interface LoginService extends UserDetailsService{
	public LoginResponse login(LoginRequest loginRequest) throws ResourceNotFoundException;

}
