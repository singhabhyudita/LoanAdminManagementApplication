package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Item;

public interface ItemRepository extends JpaRepository<Item, String> {

	public List<Item> findByItemCategory(String category);

}
