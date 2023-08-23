package com.example.backend.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.model.Employee;
@Service
public interface RegisterService {
	public Employee register(Employee emp) throws RecordAlreadyExistsException;
	public int checkEmployeeExists(Employee employee);

}
