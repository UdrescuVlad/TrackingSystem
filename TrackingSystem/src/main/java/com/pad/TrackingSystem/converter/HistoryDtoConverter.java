package com.pad.TrackingSystem.converter;

import com.pad.TrackingSystem.dto.HistoryDto;
import com.pad.TrackingSystem.model.Customer;

public class HistoryDtoConverter {
    public static HistoryDto convert(Customer customer) {
        return new HistoryDto.Builder()
                .id(customer.getId())
                .name(customer.getName())
                .phone(customer.getPhone())
                .typeCar(customer.getType_car())
                .destination(customer.getDestination())
                .build();
    }
}
