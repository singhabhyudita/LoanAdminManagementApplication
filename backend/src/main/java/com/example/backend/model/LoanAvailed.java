package com.example.backend.model;

import java.util.Date;

public class LoanAvailed {
	private Loan loan;
	private Date cardIssueDate;

	public LoanAvailed(Loan loan, Date cardIssueDate) {
		super();
		this.loan = loan;
		this.cardIssueDate = cardIssueDate;
	}

	public Loan getLoan() {
		return loan;
	}

	public void setLoan(Loan loan) {
		this.loan = loan;
	}

	public Date getCardIssueDate() {
		return cardIssueDate;
	}

	public void setCardIssueDate(Date cardIssueDate) {
		this.cardIssueDate = cardIssueDate;
	}

}
