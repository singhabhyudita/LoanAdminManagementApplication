package com.example.backend.service;

import java.util.List;

import com.example.backend.exception.NoDataFoundException;
import com.example.backend.exception.RecordAlreadyExistsException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Item;
import com.example.backend.model.PurchasedItem;

public interface ItemService {
	public List<Item> getAllItems()throws NoDataFoundException;
	public List<Object> apply(Item item, String id) throws ResourceNotFoundException;
	public List<PurchasedItem> getItemsById(String id) throws ResourceNotFoundException,NoDataFoundException;
	public List<Item> findAllItems() throws NoDataFoundException;
	public Item addItem(Item item) throws RecordAlreadyExistsException;
	public String deleteItem(String id) throws ResourceNotFoundException;
	public Item updateItem(Item item) throws ResourceNotFoundException;
	
	

}
