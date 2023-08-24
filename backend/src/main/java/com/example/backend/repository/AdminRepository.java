package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {
	
}
