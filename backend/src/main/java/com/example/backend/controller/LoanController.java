package com.example.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.LoanAvailed;
import com.example.backend.service.LoanService;



@RequestMapping("/api/loans")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class LoanController {
	
	@Autowired
	LoanService loanService;
	
	@GetMapping("/all/{id}")
	public List<LoanAvailed> getItemsById(@PathVariable String id) throws ResourceNotFoundException{
		return loanService.getItemsById(id);
	}

}
