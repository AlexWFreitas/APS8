package com.aps.webapp.controller;

import com.aps.webapp.repository.ReportRepository;
import com.aps.webapp.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/users")
public class UserController {
	
	private final ReportRepository reportRepository;
	private final UserRepository userRepository;


	public UserController(ReportRepository reportRepository, UserRepository userRepository) {
		this.reportRepository = reportRepository;
		this.userRepository = userRepository;
	}
	
	@GetMapping("/{id}/reports")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<?> getUserReports(@PathVariable Long id)
	{
		var user = userRepository.findById(id).get();

		return ResponseEntity.ok(reportRepository.findByCreator(user));
	}
	
}
