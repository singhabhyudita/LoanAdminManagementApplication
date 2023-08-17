package com.example.backend.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Item {
	@Id
	private String itemId;
	private String itemDescription;
	private char issueStatus;
	private String itemMake;
	private String itemCategory;
	private int itemValuation;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="itemId")
	private List<EmployeeIssue> employees;

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getItemDescription() {
		return itemDescription;
	}

	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}

	public char getIssueStatus() {
		return issueStatus;
	}

	public void setIssueStatus(char issueStatus) {
		this.issueStatus = issueStatus;
	}

	public String getItemMake() {
		return itemMake;
	}

	public void setItemMake(String itemMake) {
		this.itemMake = itemMake;
	}

	public String getItemCategory() {
		return itemCategory;
	}

	public void setItemCategory(String itemCategory) {
		this.itemCategory = itemCategory;
	}

	public int getItemValuation() {
		return itemValuation;
	}

	public void setItemValuation(int itemValuation) {
		this.itemValuation = itemValuation;
	}

	public List<EmployeeIssue> getEmployees() {
		return employees;
	}

	public void setEmployees(List<EmployeeIssue> employees) {
		this.employees = employees;
	}

	public Item(String itemId, String itemDescription, char issueStatus, String itemMake, String itemCategory,
			int itemValuation, List<EmployeeIssue> employees) {
		super();
		this.itemId = itemId;
		this.itemDescription = itemDescription;
		this.issueStatus = issueStatus;
		this.itemMake = itemMake;
		this.itemCategory = itemCategory;
		this.itemValuation = itemValuation;
		this.employees = employees;
	}

	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
