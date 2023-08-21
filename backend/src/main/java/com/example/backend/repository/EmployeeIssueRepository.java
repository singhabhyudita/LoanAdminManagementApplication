package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.EmployeeIssue;

import jakarta.transaction.Transactional;

public interface EmployeeIssueRepository extends JpaRepository<EmployeeIssue,String>{
	List<EmployeeIssue> findByEmployeeId(String employee_id);
	@Transactional
	void deleteAllByEmployeeId(String employee_id);
	@Transactional
	void deleteAllByItemId(String item_id);
}
