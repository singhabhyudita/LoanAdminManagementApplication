package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Employee;
import com.example.backend.model.EmployeeIssue;

public interface EmployeeIssueRepository extends JpaRepository<EmployeeIssue,String>{
	List<EmployeeIssue> findByEmployee(Employee e);

}
