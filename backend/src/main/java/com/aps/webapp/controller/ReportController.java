package com.aps.webapp.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import com.aps.webapp.models.Report;
import com.aps.webapp.models.User;
import com.aps.webapp.models.DTO.ReportDTO;
import com.aps.webapp.payload.request.CreateReportRequest;
import com.aps.webapp.payload.response.MessageResponse;
import com.aps.webapp.repository.ReportRepository;
import com.aps.webapp.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/reports/")
public class ReportController {

	private final ReportRepository reportRepository;
	private final UserRepository userRepository;

	public ReportController(ReportRepository reportRepository, UserRepository userRepository) {
		this.reportRepository = reportRepository;
		this.userRepository = userRepository;
	}

	@GetMapping
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<ReportDTO> GetAllReports() {
		var reports = reportRepository.findAll();
		
		List<ReportDTO> listReportDTO = new ArrayList<>();

		reports.forEach(report -> {
			var reportDTO = new ReportDTO(report.getId(), report.getReportTitle(), report.getReportMessage(), report.getLocation(), report.getCreateDate(), report.getCreator().getId(), report.getCreator().getFullName());
			listReportDTO.add(reportDTO);
		});

		return listReportDTO;
	}

	@PostMapping
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<?> createReport(@Valid @RequestBody CreateReportRequest createReportRequest) {

		// Retrieve User [ Creator ]
		var creator = userRepository.findById(createReportRequest.getIdUser());

		// Create new Report
		Report report = new Report(	
									createReportRequest.getReportTitle(), 
									createReportRequest.getReportContent(), 
									createReportRequest.getLocation(),
									creator.get());

		reportRepository.save(report);

		return ResponseEntity.ok(new MessageResponse("Report registered successfully!"));
		
	}
}
