package com.example.backend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);	
	//System.out.println( bc.encode("welcome@1")); --> $2a$10$vdLVgMroJO8HFnlv/9O6te/YXR.iPG.ds5i.tzWlHYFWPmPjiVcwm
	//System.out.println( bc.encode("welcome@2")); --> $2a$10$lTQDshplmeR9uexbNDb..eylFns.t5pBwFvP0zAi4rVDHL409CtAK
		
	}
	@Bean
	public BCryptPasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
