package com.pad.TrackingSystem.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Customer {

    public Customer() {}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String phone;
    private String type_car;
    private String destination;

    public Customer(Builder builder) {
        setName(builder.name);
        setPhone(builder.phone);
        setType_car(builder.typeCar);
        setDestination(builder.destination);
        setId(builder.id);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getType_car() {
        return type_car;
    }

    public void setType_car(String typeCar) {
        this.type_car = typeCar;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public static final class Builder {

        Long id;
        String name;
        String phone;
        String typeCar;
        String destination;

        private Builder() {}

        public Builder id(Long value){
            id = value;
            return this;
        }

        public Builder name(String value){
            name = value;
            return this;
        }

        public Builder phone(String value){
            phone = value;
            return this;
        }

        public Builder typeCar(String value){
            typeCar = value;
            return this;
        }

        public Builder destination(String value){
            destination = value;
            return this;
        }

        public Customer build() {
            return new Customer(this);
        }
    }

}
