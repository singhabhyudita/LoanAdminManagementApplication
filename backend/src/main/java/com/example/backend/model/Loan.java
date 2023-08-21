package com.example.backend.model;

import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Loan {
	@Id
	private String loanId;
	private String loanType;
	private int duration;
	
	@OnDelete(action=OnDeleteAction.CASCADE)
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
	@JoinColumn(name="loanId")
	private List<EmployeeCard> employees;
	
	public String getLoan_id() {
		return loanId;
	}
	public void setLoan_id(String loan_id) {
		this.loanId = loan_id;
	}
	public String getLoan_type() {
		return loanType;
	}
	public void setLoan_type(String loan_type) {
		this.loanType = loan_type;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	
}
