package com.example.backend.model;

public class LoginRequest  {

	private String loginId;	
	private String password;
	
	public LoginRequest(String username, String password) {
		super();
		this.loginId = username;
		this.password = password;
	}
	public LoginRequest() {
		super();
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public String getLoginId() {
		// TODO Auto-generated method stub
		return this.loginId;
	}
	
	public String getPassword() {
		return password;
	}
}
