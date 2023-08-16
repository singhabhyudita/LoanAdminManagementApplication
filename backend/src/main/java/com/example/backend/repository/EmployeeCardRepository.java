package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.EmployeeCard;

@Repository
public interface EmployeeCardRepository extends JpaRepository<EmployeeCard,String> {
	public List<EmployeeCard> findByEmployeeId(String employeeId);
}
