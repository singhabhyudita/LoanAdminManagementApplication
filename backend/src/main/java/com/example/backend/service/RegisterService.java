package com.example.backend.service;

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
    EmployeeRepository employeeRepository;
    public Employee register(Employee emp){
    	return employeeRepository.save(emp);
    }
    
    public int checkEmployeeExists(Employee employee)
    {
    	Optional<Employee> emp = employeeRepository.findById(employee.getEmployee_id());
    	if(emp!=null)
    		return 1;
    	else 
    		return 0;
    	
    }
}
