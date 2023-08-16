package com.example.backend.model;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class EmployeeIssue {
	@Id
	@Column(name="issue_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String issueId;
	@Column(name="issue_date")
	private Date issueDate;
	@Column(name="return_date")
	private Date return_date;
	@Column(name="employee_id")
	private String employeeId;
	@Column(name="item_id")
	private String itemId;
	
	
	public EmployeeIssue(Date issueDate, Date return_date, String employeeId, String itemId) {
		super();
		this.issueDate = issueDate;
		this.return_date = return_date;
		this.employeeId = employeeId;
		this.itemId = itemId;
	}
	public EmployeeIssue() {
		super();
	}
	public String getIssue_id() {
		return issueId;
	}
	public void setIssue_id(String issue_id) {
		this.issueId = issue_id;
	}
	public Date getIssue_date() {
		return issueDate;
	}
	public void setIssue_date(Date issue_date) {
		this.issueDate = issue_date;
	}
	public Date getReturn_date() {
		return return_date;
	}
	public void setReturn_date(Date return_date) {
		this.return_date = return_date;
	}
	
	
}
