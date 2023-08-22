package com.example.backend;


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
import org.springframework.web.bind.annotation.RequestBody;

import com.example.backend.model.Employee;
import com.example.backend.model.EmployeeCard;
import com.example.backend.model.EmployeeIssue;
import com.example.backend.model.Item;
import com.example.backend.model.Loan;
import com.example.backend.model.LoginRequest;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
@RunWith(SpringRunner.class)
@WebMvcTest
public class AdminControllerTest {
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
	public void testLogin() throws Exception {
		LoginRequest loginRequest = new LoginRequest();
		loginRequest.setLoginId("123456");
		loginRequest.setPassword("Password@1");
		String str = "string";
		Mockito.when(adminService.login(ArgumentMatchers.any())).thenReturn(str);
		String json = mapper.writeValueAsString(loginRequest);
		MvcResult requestResult = mvc.perform(post("/api/admin/login").contentType(MediaType.APPLICATION_JSON_UTF8)
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		String result = requestResult.getResponse().getContentAsString();
		assertEquals(result,str);
	}
	
	@Test
	public void testAddEmployee() throws Exception{
		Employee e = new Employee();
//		List<EmployeeIssue> issues = new ArrayList<>();
//		List<EmployeeCard> cards = new ArrayList<>();
		e.setDate_of_birth(new Date());
		e.setDate_of_joining(new Date());
		e.setDepartment("IT");
		e.setDesignation("Manager");
		e.setEmployee_id("123456");
		e.setEmployee_name("employee");
		e.setGender('M');
		e.setPassword("Password@1");
		Mockito.when(employeeService.addEmployee(ArgumentMatchers.any())).thenReturn(e);
		String json = mapper.writeValueAsString(e);

		mvc.perform(post("/api/admin/add").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(status().isOk()).andExpect(jsonPath("$.employee_id",Matchers.equalTo(e.getEmployee_id())));

		
	
	}
	@Test
	public void testAddLoan() throws Exception{
		Loan l = new Loan();
		l.setLoan_id("L0001");
		l.setDuration(3);
		l.setLoan_type("Furniture");
		Mockito.when(loanService.addLoan(ArgumentMatchers.any())).thenReturn(l);
		String json = mapper.writeValueAsString(l);

		mvc.perform(post("/api/admin/loans/add").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.loan_id",Matchers.equalTo(l.getLoan_id())));

		
	
	
	}
	@Test
	public void testAddItem() throws Exception{
		Item i = new Item();
		List<EmployeeIssue> employees = new ArrayList<EmployeeIssue>();
		i.setEmployees(employees);
		i.setIssueStatus('N');
		i.setItemCategory("Furniture");
		i.setItemDescription("Chair");
		i.setItemId("1");
		i.setItemMake("Wood");
		i.setItemValuation(4000);
		Mockito.when(itemService.addItem(ArgumentMatchers.any())).thenReturn(i);
		String json = mapper.writeValueAsString(i);
		mvc.perform(post("/api/admin/items/add").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.itemId",Matchers.equalTo(i.getItemId())));
		
	
	}
	
	@Test
	public void testFindAll() throws Exception {
		List<Employee> list = new ArrayList<>();
		Employee e = new Employee();
//		
		e.setDate_of_birth(new Date());
		e.setDate_of_joining(new Date());
		e.setDepartment("IT");
		e.setDesignation("Manager");
		e.setEmployee_id("123456");
		e.setEmployee_name("employee");
		e.setGender('M');
		e.setPassword("Password@1");
		list.add(e);
		Mockito.when(employeeService.findAll()).thenReturn(list);
		
		mvc.perform(get("/api/admin/all").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
		
		
	}
	
	@Test
	public void testFindAllLoans() throws Exception {
		List<Loan> list = new ArrayList<>();
		Loan l = new Loan();
		l.setLoan_id("L0001");
		l.setDuration(3);
		l.setLoan_type("Furniture");
		list.add(l);
		Mockito.when(loanService.findAllLoans()).thenReturn(list);
		
		mvc.perform(get("/api/admin/loans/all").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
		
	
	}
	
	@Test
	public void testFindAllItems() throws Exception {
		List<Item> list = new ArrayList<>();
		Item i = new Item();
		List<EmployeeIssue> employees = new ArrayList<EmployeeIssue>();
		i.setEmployees(employees);
		i.setIssueStatus('N');
		i.setItemCategory("Furniture");
		i.setItemDescription("Chair");
		i.setItemId("1");
		i.setItemMake("Wood");
		i.setItemValuation(4000);
		list.add(i);
		Mockito.when(itemService.findAllItems()).thenReturn(list);
		
		mvc.perform(get("/api/admin/items/all").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
		
	
	}
	
	@Test
	public void testUpdateEmployee() throws Exception {
		//List<Employee> list = new ArrayList<>();
		Employee e = new Employee();
//		
		e.setDate_of_birth(new Date());
		e.setDate_of_joining(new Date());
		e.setDepartment("IT");
		e.setDesignation("Manager");
		e.setEmployee_id("123456");
		e.setEmployee_name("employee");
		e.setGender('M');
		e.setPassword("Password@1");
		//list.add(e);
		String json = mapper.writeValueAsString(e);

		mvc.perform(put("/api/admin/update").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.employee_id",Matchers.equalTo(e.getEmployee_id())));

		
		
	
		
	}
	
	@Test
	public void testDeleteEmployee() throws Exception {
		String id = "123456";
		String e = "str";
		Mockito.when(employeeService.deleteEmployee(id)).thenReturn(e);
		
		MvcResult requestResult= mvc.perform(delete("/api/admin/delete/{id}",id).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		String result = requestResult.getResponse().getContentAsString();
		assertEquals(result,e);
	}
	
	@Test
	public void testUpdateLoan() throws Exception {
		Loan l = new Loan();
		l.setLoan_id("L0001");
		l.setDuration(3);
		l.setLoan_type("Furniture");
		Mockito.when(loanService.updateLoan(ArgumentMatchers.any())).thenReturn(l);
		String json = mapper.writeValueAsString(l);

		mvc.perform(put("/api/admin/loans/update").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.loan_id",Matchers.equalTo(l.getLoan_id())));

	
		
	}
	
	@Test
	public void testDeleteLoan() throws Exception {
		String id = "L0002";
		String e = "str";
		Mockito.when(loanService.deleteLoan(id)).thenReturn(e);
		
		MvcResult requestResult = mvc.perform(delete("/api/admin/loans/delete/{id}",id).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		String result = requestResult.getResponse().getContentAsString();
		assertEquals(result,e);
	}
	
	@Test
	public void testUpdateItem() throws Exception {
		Item i = new Item();
		List<EmployeeIssue> employees = new ArrayList<EmployeeIssue>();
		i.setEmployees(employees);
		i.setIssueStatus('N');
		i.setItemCategory("Furniture");
		i.setItemDescription("Chair");
		i.setItemId("1");
		i.setItemMake("Wood");
		i.setItemValuation(4000);
		Mockito.when(itemService.updateItem(ArgumentMatchers.any())).thenReturn(i);
		String json = mapper.writeValueAsString(i);
		mvc.perform(put("/api/admin/items/update").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.itemId",Matchers.equalTo(i.getItemId())));;
		
		
	}
	
	@Test
	public void testDeleteItem() throws Exception {
		String id = "1";
		String e = "str";
		Mockito.when(itemService.deleteItem(ArgumentMatchers.any())).thenReturn(e);
		
		MvcResult requestResult = mvc.perform(delete("/api/admin/items/delete/{id}",id).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		String result = requestResult.getResponse().getContentAsString();
		assertEquals(result,e);
	}
	
}
