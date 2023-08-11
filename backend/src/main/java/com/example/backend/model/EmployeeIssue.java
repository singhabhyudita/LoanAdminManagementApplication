package com.example.backend.model;

import java.util.Date;

import jakarta.persistence.*;
@Entity
public class EmployeeIssue {
	@Id
	@Column(name="issue_id",length=6)
	private String issue_id;
	@Column(name="issue_date")
	private Date issue_date;
	@Column(name="return_date")
	private Date return_date;
	public EmployeeIssue(String issue_id, Date issue_date, Date return_date) {
		super();
		this.issue_id = issue_id;
		this.issue_date = issue_date;
		this.return_date = return_date;
	}
	public EmployeeIssue() {
		super();
	}
	public String getIssue_id() {
		return issue_id;
	}
	public void setIssue_id(String issue_id) {
		this.issue_id = issue_id;
	}
	public Date getIssue_date() {
		return issue_date;
	}
	public void setIssue_date(Date issue_date) {
		this.issue_date = issue_date;
	}
	public Date getReturn_date() {
		return return_date;
	}
	public void setReturn_date(Date return_date) {
		this.return_date = return_date;
	}
	
	
}
