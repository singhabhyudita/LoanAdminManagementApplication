package com.example.backend.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Item {
	@Id
	@Column(name="item_id",length=6)
	private String itemId;
	@Column(name="item_description",length=25)
	private String item_description;
	private char issueStatus;
	@Column(name="item_make",length=25)
	private String itemMake;
	@Column(name="item_category",length=25)
	private String itemCategory;
	@Column(name="item_valuation",length=6)
	private int item_valuation;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="item_id")
	private List<EmployeeIssue> employees;
	

	public Item() {
		super();
	}
	public Item(String item_description, char issue_status, String item_make, String item_category,
			int item_valuation) {
		super();
		this.item_description = item_description;
		this.issueStatus = issue_status;
		this.itemMake = item_make;
		this.itemCategory = item_category;
		this.item_valuation = item_valuation;
	}
	public String getItem_description() {
		return item_description;
	}
	public void setItem_description(String item_description) {
		this.item_description = item_description;
	}
	public char getIssue_status() {
		return issueStatus;
	}
	public void setIssue_status(char issue_status) {
		this.issueStatus = issue_status;
	}
	public String getItem_make() {
		return itemMake;
	}
	public void setItem_make(String item_make) {
		this.itemMake = item_make;
	}
	public String getItem_category() {
		return itemCategory;
	}
	public void setItem_category(String item_category) {
		this.itemCategory = item_category;
	}
	public int getItem_valuation() {
		return item_valuation;
	}
	public void setItem_valuation(int item_valuation) {
		this.item_valuation = item_valuation;
	}
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
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
	public List<EmployeeIssue> getEmployees() {
		return employees;
	}
	public void setEmployees(List<EmployeeIssue> employees) {
		this.employees = employees;
	}
}
