package com.example.backend.model;

public class LoginResponse {
	private String jwt;
	private String employeeId;
	private String employeeName;
	
	public LoginResponse(String jwt, String employeeId, String employeeName) {
		super();
		this.jwt = jwt;
		this.employeeId = employeeId;
		this.employeeName = employeeName;
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	
	
}
