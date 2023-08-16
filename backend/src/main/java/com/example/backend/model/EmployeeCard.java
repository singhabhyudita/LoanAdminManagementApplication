package com.example.backend.model;

import jakarta.persistence.Entity;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class EmployeeCard {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String cardId;
	
	
	@Column(name="employee_id")
	private String  employeeId;
	
	
	@Column(name="loan_id")
	private String loanId;
	
	private Date card_issue_date;

	public EmployeeCard() {
		super();
	}
	
	

	public EmployeeCard(String employeeId, String loanId, Date card_issue_date) {
		super();
		this.employeeId = employeeId;
		this.loanId = loanId;
		this.card_issue_date = card_issue_date;
	}



	public String getEmployeeId() {
		return employeeId;
	}



	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}



	public String getLoanId() {
		return loanId;
	}



	public void setLoanId(String loanId) {
		this.loanId = loanId;
	}

	public String getCardId() {
		return cardId;
	}

	public void setCardId(String cardId) {
		this.cardId = cardId;
	}

	
	public Date getCard_issue_date() {
		return card_issue_date;
	}

	public void setCard_issue_date(Date card_issue_date) {
		this.card_issue_date = card_issue_date;
	}
	
	
	
}
