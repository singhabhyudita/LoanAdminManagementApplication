package com.example.backend.model;

import jakarta.validation.constraints.NotBlank;

import java.util.Date;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
public class Employee {

	@Id
	@NotBlank(message = "Employee Id can't be blank")
	@Length(min = 6, max = 6, message = "Employee Id can be of 6 characters only ")
	private String employeeId;
	@NotBlank(message = "Password can't be blank")
	@Length(min = 10, max = 60, message = "Password can be of 10-60 characters only")
	private String password;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	private String employeeName;
	private String designation;
	private String department;

	@OnDelete(action = OnDeleteAction.CASCADE)
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "employeeId")
	private List<EmployeeIssue> issues;

	@OnDelete(action = OnDeleteAction.CASCADE)
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "employeeId")
	private List<EmployeeCard> cards;

	public Employee() {
		super();
	}

	private char gender;

	public Employee(
			@NotBlank(message = "Employee Id can't be blank") @Length(min = 6, max = 6, message = "Employee Id can be of 6 characters only ") String employeeId,
			@NotBlank(message = "Password can't be blank") @Length(min = 10, max = 60, message = "Password can be of 10-60 characters only") String password,
			String employeeName, String designation, String department, char gender, Date date_of_birth,
			Date date_of_joining) {
		super();
		this.employeeId = employeeId;
		this.password = password;
		this.employeeName = employeeName;
		this.designation = designation;
		this.department = department;
		this.gender = gender;
		this.date_of_birth = date_of_birth;
		this.date_of_joining = date_of_joining;
	}

	@JsonFormat(pattern = "yyyy-MM-DD")
	private Date date_of_birth;
	@JsonFormat(pattern = "yyyy-MM-DD")
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
