package com.example.backend.exception;

public class RecordAlreadyExistsException extends Exception {
	private String message;

	public RecordAlreadyExistsException(String message) {
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

