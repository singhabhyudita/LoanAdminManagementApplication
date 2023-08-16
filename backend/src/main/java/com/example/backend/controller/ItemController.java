package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public List<Item> getAllItems()
	{
		return itemService.getAllItems();
	}
	
	@GetMapping("/apply/{id}")
	public List<Object> apply(@RequestBody Item item, @PathVariable String id){
		return itemService.apply(item,id);	
	}
	
	@GetMapping("/all/{id}")
	public List<PurchasedItem> getItemsById(@PathVariable String id){
		return itemService.getItemsById(id);
	}

}
