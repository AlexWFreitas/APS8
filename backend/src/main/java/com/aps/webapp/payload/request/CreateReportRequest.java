package com.aps.webapp.payload.request;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

public class CreateReportRequest {
	
    @NotBlank
    private String creatorName;
 
    @NotBlank
    private Long idUser;

	@NotBlank
	private String reportContent;
    
	@NotBlank
    private String reportTitle;

	@NotBlank
	private String location;

	public String getCreatorName() {
		return this.creatorName;
	}

	public void setCreatorName(String creatorName) {
		this.creatorName = creatorName;
	}

	public Long getIdUser() {
		return this.idUser;
	}

	public void setidUser(Long idUser) {
		this.idUser = idUser;
	}

	public String getReportContent() {
		return this.reportContent;
	}

	public void setReportContent(String reportContent) {
		this.reportContent = reportContent;
	}

	public String getReportTitle() {
		return this.reportTitle;
	}

	public void setReportTitle(String reportTitle) {
		this.reportTitle = reportTitle;
	}

	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}


}
