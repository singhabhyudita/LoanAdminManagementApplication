package com.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
@ComponentScan(basePackages="com")

@SpringBootTest(classes= {com.example.backend.EmployeeControllerTest.class, com.example.backend.LoanControllerTest.class, com.example.backend.AdminControllerTest.class, com.example.backend.ItemControllerTest.class})


class BackendApplicationTests {

	@Test
	void contextLoads() {
	}

}
