package com.example.backend.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
@Embeddable
public class EmployeeLoanKey implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column(name="employee_id")
	private String employee_id;
	@Column(name="loan_id")
	private String loan_id;
	public EmployeeLoanKey(String employee_id, String loan_id) {
		super();
		this.employee_id = employee_id;
		this.loan_id = loan_id;
	}

}
