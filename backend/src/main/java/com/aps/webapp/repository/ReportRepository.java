package com.aps.webapp.repository;

import com.aps.webapp.models.Report;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {
	
}
