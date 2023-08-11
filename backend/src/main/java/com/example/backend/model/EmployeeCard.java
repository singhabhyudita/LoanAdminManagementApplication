package com.example.backend.model;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class EmployeeCard {
	@EmbeddedId
	private EmployeeLoanKey pk;
	
	@ManyToOne
	@MapsId("employee_id")
	@JoinColumn(name="employee_id")
	private Employee employee;
	
	@ManyToOne
	@MapsId("loan_id")
	@JoinColumn(name="loan_id")
	private Loan loan;
	
	private Date card_issue_date;

	public EmployeeCard() {
		super();
	}

	public EmployeeCard(EmployeeLoanKey pk, Employee employee, Loan loan, Date card_issue_date) {
		super();
		this.pk = pk;
		this.employee = employee;
		this.loan = loan;
		this.card_issue_date = card_issue_date;
	}

	public EmployeeLoanKey getPk() {
		return pk;
	}

	public void setPk(EmployeeLoanKey pk) {
		this.pk = pk;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Loan getLoan() {
		return loan;
	}

	public void setLoan(Loan loan) {
		this.loan = loan;
	}

	public Date getCard_issue_date() {
		return card_issue_date;
	}

	public void setCard_issue_date(Date card_issue_date) {
		this.card_issue_date = card_issue_date;
	}
	
	
	
}
