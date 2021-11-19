package com.aps.webapp.models.DTO;

import java.time.LocalDateTime;

public class ReportDTO {

	private Long id;

	private String reportTitle;

	private String reportMessage;

	private String location;

	private LocalDateTime createdDate;

	private Long idUser;

	private String creatorName;

	public ReportDTO (Long id, String reportTitle, String reportMessage, String location, LocalDateTime createdDate, Long idUser, String creatorName) {
		this.id = id;
		this.reportTitle = reportTitle;
		this.reportMessage = reportMessage;
		this.location = location;
		this.createdDate = createdDate;
		this.idUser = idUser;
		this.creatorName = creatorName;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReportTitle() {
		return this.reportTitle;
	}

	public void setReportTitle(String reportTitle) {
		this.reportTitle = reportTitle;
	}

	public String getReportMessage() {
		return this.reportMessage;
	}

	public void setReportMessage(String reportMessage) {
		this.reportMessage = reportMessage;
	}

	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public LocalDateTime getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public Long getIdUser() {
		return this.idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	public String getCreatorName() {
		return this.creatorName;
	}

	public void setCreatorName(String creatorName) {
		this.creatorName = creatorName;
	}
	
}
