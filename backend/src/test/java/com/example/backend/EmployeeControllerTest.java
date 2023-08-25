package com.example.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;

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

import com.example.backend.model.Employee;
import com.example.backend.model.LoginRequest;
import com.example.backend.model.LoginResponse;
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
@RunWith(SpringRunner.class)
@WebMvcTest
public class EmployeeControllerTest {
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

	@SuppressWarnings("deprecation")
	@Test
	public void testLogin() throws Exception {
		LoginRequest loginRequest = new LoginRequest();
		loginRequest.setLoginId("123456");
		loginRequest.setPassword("Password@1");
		LoginResponse loginResponse = new LoginResponse(loginRequest.getLoginId(),"abc");
		Mockito.when(loginService.login(ArgumentMatchers.any())).thenReturn(loginResponse);
		String json = mapper.writeValueAsString(loginRequest);
		mvc.perform(post("/api/employee/login").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.employeeId",Matchers.equalTo(loginRequest.getLoginId())));
	}

	
	@SuppressWarnings("deprecation")
	@Test
	public void testRegister() throws Exception{
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
		Mockito.when(registerService.register(ArgumentMatchers.any())).thenReturn(e);
		String json = mapper.writeValueAsString(e);

		mvc.perform(post("/api/employee/register").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(status().isOk()).andExpect(jsonPath("$.employee_id",Matchers.equalTo(e.getEmployee_id())));

		
	
	}

}
