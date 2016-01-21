/**
 * 
 */
package co.zero.vogue_ui.model;

/**
 * @author hernan
 *
 */
public class Car {
	private String id;
	private String brand;
	private int model;
	private String color;
	private double price;
	
	public Car(String id, String brand, int model , String color, double price){
		this.id = id;
		this.brand = brand;
		this.model = model;
		this.color = color;
		this.price = price;	
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getModel() {
		return model;
	}
	public void setModel(int model) {
		this.model = model;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
}
