package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Item;
import com.example.backend.service.ItemService;

@RestController
public class ItemController {
	@Autowired
	ItemService itemService;
	
	@GetMapping("/showItems")
	public List<Item> getAllItems()
	{
		return itemService.getAllItems();
	}
	
	@GetMapping("/apply/{id}")
	public String apply(@RequestBody Item item, @PathVariable String id){
		return itemService.apply(item,id);	
	}
	
	@GetMapping("/items/{id}")
	public List<Item> getItemsById(@PathVariable String itemCategory){
		return itemService.getItemsById(itemCategory);
		
	}

}
