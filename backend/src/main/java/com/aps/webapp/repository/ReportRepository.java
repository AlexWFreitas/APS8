package com.aps.webapp.repository;

import java.util.List;

import com.aps.webapp.models.Report;
import com.aps.webapp.models.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {

	public List<Report> findByCreator(User creator);
	
}
