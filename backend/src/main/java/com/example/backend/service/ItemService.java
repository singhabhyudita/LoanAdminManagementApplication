package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Item;
import com.example.backend.repository.ItemRepository;

@Service
public class ItemService {
	@Autowired
	ItemRepository itemRepository;
	
	public Item saveItem(Item it) {
		
		Item i= itemRepository.save(it);
		return i;
		
	}
}