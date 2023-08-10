package com.example.backend.service;

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
    EmployeeRepository employeeRepository;
    public Employee register(Employee employee){
        employeeRepository.save(employee);
        return employee;
    }
}
