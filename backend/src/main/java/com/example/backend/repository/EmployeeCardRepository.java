package com.example.backend.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Employee;
import com.example.backend.model.EmployeeCard;
import com.example.backend.model.EmployeeLoanKey;

@Repository
public interface EmployeeCardRepository extends JpaRepository<EmployeeCard,EmployeeLoanKey> {
}
