package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Admin;
import com.example.backend.model.Employee;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {
	
}
