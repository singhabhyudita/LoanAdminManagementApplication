package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {
	@Id
	@Column(name="item_id",length=6)
	private String item_id;
	@Column(name="item_description",length=25)
	private String item_description;
	private char issue_status;
	@Column(name="item_make",length=25)
	private String item_make;
	@Column(name="item_category",length=25)
	private String itemCategory;
	@Column(name="item_valuation",length=6)
	private int item_valuation;
	public Item() {
		super();
	}
	public Item(String item_description, char issue_status, String item_make, String item_category,
			int item_valuation) {
		super();
		this.item_description = item_description;
		this.issue_status = issue_status;
		this.item_make = item_make;
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
		return issue_status;
	}
	public void setIssue_status(char issue_status) {
		this.issue_status = issue_status;
	}
	public String getItem_make() {
		return item_make;
	}
	public void setItem_make(String item_make) {
		this.item_make = item_make;
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
}
