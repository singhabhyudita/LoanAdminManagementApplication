package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Loan {
	@Id
	@Column(name="loan_id", length=6)
	private String loan_id;
	@Column(name="loan_type", length=15)
	private String loanType;
	@Column(name="duration_in_years", length=2)
	private int duration;
	
	public String getLoan_id() {
		return loan_id;
	}
	public void setLoan_id(String loan_id) {
		this.loan_id = loan_id;
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
