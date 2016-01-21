/**
 * 
 */
package co.zero.vogue_ui.views;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.ViewScoped;

import co.zero.vogue_ui.model.Incident;
import co.zero.vogue_ui.service.IncidentService;

/**
 * @author hernan
 *
 */
@ManagedBean(name="incidentView")
@ViewScoped
public class IncidentView implements Serializable {     
	private static final long serialVersionUID = 1L;
	private List<Incident> incidents;
     
    @ManagedProperty("#{incidentService}")
    private IncidentService service;
 
    @PostConstruct
    public void init() {
    	incidents = service.createIncidents(50);
    }
     
    public List<Incident> getIncidents() {
        return incidents;
    }
 
    public void setService(IncidentService service) {
        this.service = service;
    }
}
