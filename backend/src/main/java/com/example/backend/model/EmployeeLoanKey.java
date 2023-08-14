package com.example.backend.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
@Embeddable
public class EmployeeLoanKey implements Serializable {
	@Column(name="employee_id")
	private String employee_id;
	@Column(name="loan_id")
	private String loan_id;

}
