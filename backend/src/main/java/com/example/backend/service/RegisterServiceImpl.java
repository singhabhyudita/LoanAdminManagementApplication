package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	EmployeeRepository employeeRepository;

	public Employee register(Employee emp) throws RecordAlreadyExistsException {
		if (!employeeRepository.findById(emp.getEmployee_id()).isEmpty())
			throw new RecordAlreadyExistsException("Employee ID already exists");
		else
			return emp;
	}

}
