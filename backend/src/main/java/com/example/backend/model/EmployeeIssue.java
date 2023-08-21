package com.example.backend.model;

import java.util.Date;


import jakarta.persistence.*;

@Entity
public class EmployeeIssue {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int issueId;
	private Date issueDate;
	private Date return_date;
	@Column
	private String employeeId;
	@Column
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
	public int getIssue_id() {
		return issueId;
	}
	public void setIssue_id(int issue_id) {
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
	public int getIssueId() {
		return issueId;
	}
	public void setIssueId(int issueId) {
		this.issueId = issueId;
	}
	public Date getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(Date issueDate) {
		this.issueDate = issueDate;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	
	
	
}
