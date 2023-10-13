package com.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entity.AdminLogin;
import com.demo.Repository.AdminLoginRepository;





@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AdminLoginController {
	

	@Autowired
	private AdminLoginRepository lrepo;

	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/Adminlogin")
	public ResponseEntity<?> login(@RequestBody AdminLogin l1)
	{
		AdminLogin l3 = l1;
		
		String first = l3.getUid();
		String second = l3.getUpswd();
		AdminLogin l4 = lrepo.getOne(first);
		boolean flag = lrepo.existsById(first);
		if(flag)
		{
			if(second.equals(l4.getUpswd()))
			  return ResponseEntity.ok(l3);	
		}
		return (ResponseEntity<AdminLogin>) ResponseEntity.internalServerError();
	}

}
