package com.example.backend.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RequestMapping("/api/loans")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class LoanController {
	
	//@GetMapping("/all/{id}")
//	public List<PurchasedItem> getItemsById(@PathVariable String id){
//		return itemService.getItemsById(id);
//	}

}
