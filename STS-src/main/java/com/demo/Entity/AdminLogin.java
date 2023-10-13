package com.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AdminLogin")
public class AdminLogin {
	
	@Id
	private String uid;
	private String upswd;
	
	public AdminLogin() {
		super();
	}
	public AdminLogin(String uid, String upswd) {
		super();
		this.uid = uid;
		this.upswd = upswd;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getUpswd() {
		return upswd;
	}
	public void setUpswd(String upswd) {
		this.upswd = upswd;
	}
	
	

}
