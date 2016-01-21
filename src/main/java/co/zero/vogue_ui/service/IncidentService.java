package co.zero.vogue_ui.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

import co.zero.vogue_ui.model.Incident;

@ManagedBean(name = "incidentService")
@ApplicationScoped
public class IncidentService{

	public List<Incident> createIncidents(int size) {
		List<Incident> list = new ArrayList<Incident>();
		for (int i = 0; i < size; i++) {
			Incident incident = new Incident();
			incident.setClazz("clazz" + (i%5));
			incident.setClosedDate(new Date());
			incident.setComments("Some Comments");
			incident.setCreatedDate(new Date());
			incident.setDescription("Description");
			incident.setIncidentArea("Incident Area");
//			incident.setOtherActions(otherActions);
			incident.setProbability("Probability");
			incident.setProgress(50);
//			incident.setQuicklyActions(quicklyActions);
			incident.setReporterName("reporterName");
			incident.setReportType("reportType" + (i%5));
			incident.setResponsibleName("responsibleName");
			incident.setSeverity("severity" + (i%5));
			incident.setSioId("SioId-"+ i);
			list.add(incident);
		}

		return list;
	}
}
