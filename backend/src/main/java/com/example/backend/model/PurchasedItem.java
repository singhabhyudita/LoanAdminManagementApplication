package com.example.backend.model;

public class PurchasedItem {
	private String issueId;
	private Item item;
	public String getIssueId() {
		return issueId;
	}
	public void setIssueId(String issueId) {
		this.issueId = issueId;
	}
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
	public PurchasedItem(String issueId, Item item) {
		super();
		this.issueId = issueId;
		this.item = item;
	}	
}
