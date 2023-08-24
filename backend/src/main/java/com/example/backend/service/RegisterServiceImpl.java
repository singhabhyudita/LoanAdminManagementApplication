package com.example.backend.service;

import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class RegisterServiceImpl implements RegisterService {

    @Autowired
    EmployeeRepository employeeRepository;
    public Employee register(Employee emp) throws RecordAlreadyExistsException{
    	if(!employeeRepository.findById(emp.getEmployee_id()).isEmpty())
    		throw new RecordAlreadyExistsException("Employee ID already exists");
    	else
	        employeeRepository.save(emp);
	        return emp;
    }
    
    public int checkEmployeeExists(Employee employee)
    {
    	Optional<Employee> emp = employeeRepository.findById(employee.getEmployee_id());
    	if(!emp.isEmpty())
    		return 1;
    	else 
    		return 0;
    	
    }
}
