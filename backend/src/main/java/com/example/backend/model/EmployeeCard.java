package com.example.backend.model;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class EmployeeCard {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cardId;
	private String employeeId;
	private String loanId;
	private Date cardIssueDate;

	public EmployeeCard() {
		super();
	}

	public EmployeeCard(String employeeId, String loanId, Date card_issue_date) {
		super();
		this.employeeId = employeeId;
		this.loanId = loanId;
		this.cardIssueDate = card_issue_date;
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

	public int getCardId() {
		return cardId;
	}

	public void setCardId(int cardId) {
		this.cardId = cardId;
	}

	public Date getCardIssueDate() {
		return cardIssueDate;
	}

	public void setCardIssueDate(Date cardIssueDate) {
		this.cardIssueDate = cardIssueDate;
	}

}
