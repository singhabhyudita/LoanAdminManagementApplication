package com.example.backend;

import java.util.ArrayList;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.backend.model.EmployeeIssue;
import com.example.backend.model.Item;
import com.example.backend.model.PurchasedItem;
import com.example.backend.repository.AdminRepository;
import com.example.backend.repository.EmployeeCardRepository;
import com.example.backend.repository.EmployeeIssueRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.repository.ItemRepository;
import com.example.backend.repository.LoanRepository;
import com.example.backend.service.AdminLoginService;
import com.example.backend.service.EmployeeService;
import com.example.backend.service.ItemService;
import com.example.backend.service.LoanService;
import com.example.backend.service.LoginService;
import com.example.backend.service.RegisterService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.request.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@RunWith(SpringRunner.class)
@WebMvcTest
public class ItemControllerTest {
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private ItemService itemService;
	
	@MockBean
	private LoanService loanService;
	
	@MockBean
	private EmployeeService employeeService;
	
	@MockBean
	private LoginService loginService;
	
	@MockBean
	private AdminLoginService adminService;
	
	@MockBean
	private RegisterService registerService;
	
	
	
	@MockBean
	private AdminRepository adminRepository;
	
	@MockBean
	private ItemRepository itemRepository;
	
	@MockBean
	private EmployeeIssueRepository employeeIssueRepository;
	
	@MockBean
	private EmployeeRepository employeeRepository;
	
	@MockBean
	private EmployeeCardRepository employeeCardRepository;
	
	@MockBean
	private LoanRepository loanRepository;
	
	ObjectMapper mapper = new ObjectMapper().findAndRegisterModules().disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
	
	@Test
	public void testApply() throws Exception {
		Item i = new Item();
		List<EmployeeIssue> employees = new ArrayList<EmployeeIssue>();
		
		List<Object> list =  new ArrayList<>();
		i.setEmployees(employees);
		i.setIssueStatus('N');
		i.setItemCategory("Furniture");
		i.setItemDescription("Chair");
		i.setItemId("1");
		i.setItemMake("Wood");
		i.setItemValuation(4000);
		list.add(i);
		
		Mockito.when(itemService.apply(ArgumentMatchers.any(),ArgumentMatchers.any())).thenReturn(list);
		String json = mapper.writeValueAsString(i);
		mvc.perform(post("/api/items/apply/{id}","000001").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
		//String result = requestResult.getResponse().getContentAsString();
		//assertEquals(result.,list);
	}
	
	@Test
	public void testGetItemsById() throws Exception {
		PurchasedItem item = new PurchasedItem();
		item.setIssueId(1);
		Item i = new Item();
		List<EmployeeIssue> employees = new ArrayList<EmployeeIssue>();
		List<PurchasedItem> list = new ArrayList<PurchasedItem>();
		i.setEmployees(employees);
		i.setIssueStatus('N');
		i.setItemCategory("Furniture");
		i.setItemDescription("Chair");
		i.setItemId("1");
		i.setItemMake("Wood");
		i.setItemValuation(4000);
		item.setItem(i);
		list.add(item);
		Mockito.when(itemService.getItemsById(ArgumentMatchers.any())).thenReturn(list);
		mvc.perform(get("/api/items/all/{id}","000001").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
		
		
		
	}
	

}
