package com.example.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.repository.EmployeeRepository;

@Service
public class LoginServiceImpl implements LoginService{
	@Autowired 
	EmployeeRepository employeeRepo;
	
	public String login(LoginRequest loginRequest) {
		String result="";
		Employee employee = null;
		Optional<Employee>	obj=employeeRepo.findById(loginRequest.getLoginId());
		if(obj.isPresent())
		{
			employee=obj.get();
		}
		if (employee==null)
		{
			result="Invalid user";
		}
		
		else
		{
			if(loginRequest.getPassword().equals(employee.getPassword())) {
				result=employee.getEmployee_id();
			}
			else
			{
				result="Password not matching";
			}
		}
//		if(employee.getPassword().equals(loginRequest.getPassword()))return employee;
		return result;
		
	}
}