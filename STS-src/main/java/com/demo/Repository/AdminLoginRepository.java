package com.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.Entity.AdminLogin;

@Repository
public interface AdminLoginRepository extends JpaRepository<AdminLogin, String>{



}
