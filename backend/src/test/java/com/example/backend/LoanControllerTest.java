package com.example.backend;
import com.example.backend.model.LoanAvailed;


import java.util.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.example.backend.model.Item;
import com.example.backend.model.Loan;
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

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@RunWith(SpringRunner.class)
@WebMvcTest
public class LoanControllerTest {
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private LoanService loanservice;
	
	@MockBean
	private LoanRepository loanRepo;
	
	@MockBean 
	private ItemRepository itemRepo;
	
	@MockBean
	private EmployeeRepository EmpRepo;
	
	@MockBean
	private EmployeeCardRepository employeeCardRepository;
	
	@MockBean
	private EmployeeIssueRepository employeeissueRepo;
	
	@MockBean
	private ItemService itemservice;
	
	@MockBean
	private EmployeeService employeeservice;
	
	@MockBean
	private LoginService loginservice;
	
	@MockBean
	private RegisterService registerservice;
	
	@MockBean
	private AdminLoginService adminloginservice;
	
	
	
	
	
//	System.out.println("test methods");
	
	@Test
	public void testgetItemsById() throws Exception{
		List<LoanAvailed> list =new ArrayList<>();
		Item item =new Item();
		item.setItemId("2");
		
		Loan l= new Loan();
		l.setLoan_id("2");
		l.setDuration(2);
		l.setLoan_type("Furniture");
		LoanAvailed la= new LoanAvailed(l, new Date());
//		la.setCardIssueDate(new Date());
//		la.setLoan(l);
		list.add(la);
		Mockito.when(loanservice.getItemsById(ArgumentMatchers.any())).thenReturn(list);
		mvc.perform(get("/api/loans/all/{id}","2").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
		
	
	
	}
	
	
	
	
	

}
