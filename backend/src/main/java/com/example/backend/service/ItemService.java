package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Item;
import com.example.backend.repository.ItemRepository;
import java.util.*;

@Service
public class ItemService {
	@Autowired
	ItemRepository itemRepository;
	
	public Item saveItem(Item it) {
		
		Item i= itemRepository.save(it);
		return i;
		
	}
	
	public List<Item> getAllItems(){
		return itemRepository.findAll();
	}
	
	public List<String> getCategories(){
		List<String> categories = new ArrayList<String>();
		List<Item> items =itemRepository.findAll();	
		
		for(Item item : items) {
			
			categories.add(item.getItem_category());
		}
		return categories;
		}
	public List<Item> getItems(String itemCategory){
		return itemRepository.findByItemCategory(itemCategory);
		
	}
}