package com.example.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.config.JwtTokenUtil;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.model.LoginResponse;
import com.example.backend.repository.EmployeeRepository;

@Service
public class LoginServiceImpl implements LoginService, UserDetailsService {
	@Autowired 
	EmployeeRepository employeeRepo;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	@Autowired
	JwtTokenUtil jwtTokenUtil;
	public LoginResponse login(LoginRequest loginRequest) throws ResourceNotFoundException {
		LoginRequest userDetails = (LoginRequest) this.loadUserByUsername(loginRequest.getUsername());
		if(bcryptEncoder.matches(loginRequest.getPassword(), userDetails.getPassword())) {
			return new LoginResponse(jwtTokenUtil.generateToken(userDetails),userDetails.getUsername(),employeeRepo.findById(loginRequest.getUsername()).get().getEmployee_name());

	
	

		}
		else throw new ResourceNotFoundException("No employee found with the given credentials");
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Optional<Employee> emp = employeeRepo.findById(username);
		if(emp!=null)
			return  new LoginRequest(username,emp.get().getPassword());
		else
			throw new UsernameNotFoundException("No employee found");
	}
}
