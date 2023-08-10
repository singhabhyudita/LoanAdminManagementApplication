package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class Employee {
	@Id
	@Column(name="employee_id",length=6)
	private String employee_id;
	@Column(name="password",length=60)
	private String password;
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name="employee_name",length=25)
	private String employee_name;
	@Column(name="designation",length=25)
	private String designation;
	@Column(name="department",length=25)
	private String department;
	public Employee() {
		super();
	}
	public Employee(String employee_id, String employee_name, String designation, String department, char gender,
			Date date_of_birth, Date date_of_joining) {
		super();
		this.employee_id = employee_id;
		this.employee_name = employee_name;
		this.designation = designation;
		this.department = department;
		this.gender = gender;
		this.date_of_birth = date_of_birth;
		this.date_of_joining = date_of_joining;
	}
	private char gender;
	private Date date_of_birth;
	private Date date_of_joining;
	public String getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(String employee_id) {
		this.employee_id = employee_id;
	}
	public String getEmployee_name() {
		return employee_name;
	}
	public void setEmployee_name(String employee_name) {
		this.employee_name = employee_name;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public Date getDate_of_birth() {
		return date_of_birth;
	}
	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}
	public Date getDate_of_joining() {
		return date_of_joining;
	}
	public void setDate_of_joining(Date date_of_joining) {
		this.date_of_joining = date_of_joining;
	}
	
	

}
