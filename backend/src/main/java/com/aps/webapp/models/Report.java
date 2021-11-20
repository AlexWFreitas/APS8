package com.aps.webapp.models;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;


@Entity
@Table( name = "reports" )
public class Report {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String reportTitle;

	@NotBlank
	@Column(length = 4000)
	private String reportMessage;

	@NotBlank
	private String location;

	@NotBlank
	private LocalDateTime createDate;
	
	@NotBlank
	@ManyToOne
	@JoinColumn(name="user_id", 
				nullable=false)
	private User creator;

	private Report() {};

	public Report (String reportTitle, String reportMessage, String location, User creator) {
		this.reportTitle = reportTitle;
		this.reportMessage = reportMessage;
		this.location = location;
		this.createDate = LocalDateTime.now();
		this.creator = creator;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
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


	public LocalDateTime getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}

	public User getCreator() {
		return this.creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public String getReportTitle() {
		return this.reportTitle;
	}

	public void setReportTitle(String reportTitle) {
		this.reportTitle = reportTitle;
	}
}
