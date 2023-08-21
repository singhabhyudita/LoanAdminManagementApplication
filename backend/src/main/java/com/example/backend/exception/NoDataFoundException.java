package com.example.backend.exception;

public class NoDataFoundException extends Exception {
	private String message;

	public NoDataFoundException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
