package com.example.backend.model;

import jakarta.validation.constraints.NotBlank;

import java.util.Date;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
public class Employee {
	
	@Id
	@Column(name="employee_id",length=6)
	@NotBlank(message="Employee Id can't be blank")
	@Length(min=6,max=6, message="Employee Id can be of 6 characters only ")
	private String employeeId;
	@Column(name="password",length=60)
	@NotBlank(message="Password can't be blank")
	@Length(min=10,max=60,message="Password can be of 10-60 characters only")
	private String password;
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name="employee_name",length=25)
	private String employeeName;
	@Column(name="designation",length=25)
	private String designation;
	@Column(name="department",length=25)
	private String department;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="employee_id")
	private List<EmployeeIssue> issues;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="employee_id")
	private List<EmployeeCard> cards;
	
	public Employee() {
		super();
	}
	public Employee(String employee_id, String employee_name, String designation, String department, char gender,
			Date date_of_birth, Date date_of_joining) {
		super();
		this.employeeId = employee_id;
		this.employeeName = employee_name;
		this.designation = designation;
		this.department = department;
		this.gender = gender;
		this.date_of_birth = date_of_birth;
		this.date_of_joining = date_of_joining;
	}
	private char gender;
	@JsonFormat(pattern="yyyy-MM-DD")
	private Date date_of_birth;
	private Date date_of_joining;
	public String getEmployee_id() {
		return employeeId;
	}
	public void setEmployee_id(String employee_id) {
		this.employeeId = employee_id;
	}
	public String getEmployee_name() {
		return employeeName;
	}
	public void setEmployee_name(String employee_name) {
		this.employeeName = employee_name;
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
