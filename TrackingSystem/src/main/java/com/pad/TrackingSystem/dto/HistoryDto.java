package com.pad.TrackingSystem.dto;

public class HistoryDto {
    private HistoryDto() {}

    private Long id;
    private String name;
    private String phone;
    private String typeCar;
    private String destination;

    public HistoryDto(Builder builder) {
        id = builder.id;
        name = builder.name;
        phone = builder.phone;
        typeCar = builder.typeCar;
        destination = builder.destination;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getTypeCar() {
        return typeCar;
    }

    public String getDestination() {
        return destination;
    }

    public static final class Builder {

        Long id;
        String name;
        String phone;
        String typeCar;
        String destination;

        public Builder() {}

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

        public HistoryDto build() {
            return new HistoryDto(this);
        }
    }
}
