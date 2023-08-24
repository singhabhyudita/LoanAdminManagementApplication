package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.NoDataFoundException;

import com.example.backend.exception.ResourceNotFoundException;

import com.example.backend.model.Item;
import com.example.backend.model.PurchasedItem;
import com.example.backend.service.ItemService;

@RequestMapping("/api/items")
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class ItemController {
	@Autowired
	ItemService itemService;
	
	@GetMapping("/showItems")
	public List<Item> getAllItems()throws NoDataFoundException
	{
		return itemService.getAllItems();
	}
	
	@PostMapping("/apply/{id}")
	public List<Object> apply(@RequestBody Item item, @PathVariable String id) throws ResourceNotFoundException{
		return itemService.apply(item,id);	
	}
	
	
	@GetMapping("/all/{id}")
	public List<PurchasedItem> getItemsById(@PathVariable String id) throws ResourceNotFoundException,NoDataFoundException {
		//itemService.getItemsById("2389");
		return itemService.getItemsById(id);
		
	}
	
}
