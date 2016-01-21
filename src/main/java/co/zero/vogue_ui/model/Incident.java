/**
 * 
 */
package co.zero.vogue_ui.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @author hernan
 *
 */
public class Incident implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String sioId;
	//ej. Incidente, Accidente, Condición Insegura
	private String reportType;
	private String reporterName;
	//ej. Cremas
	private String incidentArea;
	private Date createdDate;
	private String description;
	//Acciones tomadas inmediatamente al crear el incidente
	private List<String> quicklyActions;
	//Acciones que se deberán tomar para cerrar el incidente
	private List<String> otherActions;
	private String responsibleName;
	//Catastrófico, Crítico, Severo, Menor, Insignificante
	private String severity;
	//Frecuente, probable, ocasional, raro, improbable
	private String probability;
	//VH, H, M, L, VL
	private String clazz;
	//% de avance del responsibleName sobre las otherActions
	private double progress;
	//Fecha en la que se terminaron de ejecutar las acciones finales
	private Date closedDate;
	private String comments;
	
	public String getSioId() {
		return sioId;
	}
	public void setSioId(String sioId) {
		this.sioId = sioId;
	}
	public String getReportType() {
		return reportType;
	}
	public void setReportType(String reportType) {
		this.reportType = reportType;
	}
	public String getReporterName() {
		return reporterName;
	}
	public void setReporterName(String reporterName) {
		this.reporterName = reporterName;
	}
	public String getIncidentArea() {
		return incidentArea;
	}
	public void setIncidentArea(String incidentArea) {
		this.incidentArea = incidentArea;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<String> getQuicklyActions() {
		return quicklyActions;
	}
	public void setQuicklyActions(List<String> quicklyActions) {
		this.quicklyActions = quicklyActions;
	}
	public List<String> getOtherActions() {
		return otherActions;
	}
	public void setOtherActions(List<String> otherActions) {
		this.otherActions = otherActions;
	}
	public String getResponsibleName() {
		return responsibleName;
	}
	public void setResponsibleName(String responsibleName) {
		this.responsibleName = responsibleName;
	}
	public String getSeverity() {
		return severity;
	}
	public void setSeverity(String severity) {
		this.severity = severity;
	}
	public String getProbability() {
		return probability;
	}
	public void setProbability(String probability) {
		this.probability = probability;
	}
	public String getClazz() {
		return clazz;
	}
	public void setClazz(String clazz) {
		this.clazz = clazz;
	}
	public double getProgress() {
		return progress;
	}
	public void setProgress(double progress) {
		this.progress = progress;
	}
	public Date getClosedDate() {
		return closedDate;
	}
	public void setClosedDate(Date closedDate) {
		this.closedDate = closedDate;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
}
