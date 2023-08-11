package com.example.backend.model;

public class LoginRequest {
	
	private String login_id;
	private String password;
	public String getEmployee_id() {
		return login_id;
	}
	public void setEmployee_id(String employee_id) {
		this.login_id = employee_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LoginRequest(String employee_id, String password) {
		super();
		this.login_id = employee_id;
		this.password = password;
	}
	

}
