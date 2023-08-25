package com.example.backend.model;

public class PurchasedItem {

	private int issueId;
	private Item item;

	public int getIssueId() {
		return issueId;
	}

	public void setIssueId(int issueId) {
		this.issueId = issueId;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public PurchasedItem(int issueId, Item item) {
		super();
		this.issueId = issueId;
		this.item = item;
	}

	public PurchasedItem() {
		super();
	}
}
