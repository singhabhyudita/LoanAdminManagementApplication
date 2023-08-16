package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {
	
	@Id
	@Column(name="admin_id",length=6)
	private String adminId;
	@Column(name="password",length=60)
	private String password;
	@Column(name="admin_name")
	private String name;
	public Admin(String admin_id, String password, String name) {
		super();
		this.adminId = admin_id;
		this.password = password;
		this.name = name;
	}
	public Admin() {
		super();
	}
	public String getAdmin_id() {
		return adminId;
	}
	public void setAdmin_id(String admin_id) {
		this.adminId = admin_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}
