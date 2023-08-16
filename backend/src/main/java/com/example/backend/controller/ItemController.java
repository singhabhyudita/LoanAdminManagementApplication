package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/getCategories")
	public List<String> getCategories(){
		return itemService.getCategories();	}
	
	@GetMapping("/getItems/{itemCategory}")
	public List<Item> getItems(@PathVariable String itemCategory){
		return itemService.getItems(itemCategory);
		
	}
	
}
