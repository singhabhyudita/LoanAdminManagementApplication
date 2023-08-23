package com.example.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Date;
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

import com.example.backend.model.Loan;
import com.example.backend.model.LoanAvailed;
import com.example.backend.repository.AdminRepository;
import com.example.backend.repository.EmployeeCardRepository;
import com.example.backend.repository.EmployeeIssueRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.repository.ItemRepository;
import com.example.backend.repository.LoanRepository;
import com.example.backend.service.AdminLoginService;
import com.example.backend.service.EmployeeService;
//import com.example.backend.service.EmployeeServiceImpl;
import com.example.backend.service.ItemService;
import com.example.backend.service.LoanService;
import com.example.backend.service.LoginService;
import com.example.backend.service.RegisterService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
@RunWith(SpringRunner.class)
@WebMvcTest
public class LoanControllerTest {
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
	public void testGetItemsById() throws Exception {
		Loan loan = new Loan("L0001","Furniture",3);
		LoanAvailed la = new LoanAvailed(loan, new Date());
		List<LoanAvailed> list = new ArrayList<>();
		list.add(la);
		Mockito.when(loanService.getItemsById(ArgumentMatchers.any())).thenReturn(list);
		mvc.perform(get("/api/loans/all/{id}","000001").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
	}

}
