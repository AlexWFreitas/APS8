package com.aps.webapp.controller;

import java.util.List;

import com.aps.webapp.models.Report;
import com.aps.webapp.repository.ReportRepository;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/reports/")
public class ReportController {

	private final ReportRepository reportRepository;

	public ReportController(ReportRepository reportRepository) {
		this.reportRepository = reportRepository;
	}

	@GetMapping
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public List<Report> GetAllReports() {
		return reportRepository.findAll();
	}

}
