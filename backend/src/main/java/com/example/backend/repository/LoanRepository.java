package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.model.Loan;

public interface LoanRepository extends JpaRepository<Loan,String>{
	public Loan findByLoanType(String type);
	@Query("select distinct l.loanType from Loan l")
	public List<String> findDistinctLoanTypes();
}
