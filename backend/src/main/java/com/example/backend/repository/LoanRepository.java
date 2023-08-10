package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Loan;

public interface LoanRepository extends JpaRepository<Loan,String>{

}
