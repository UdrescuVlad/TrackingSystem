package com.pad.TrackingSystem.service;

import com.pad.TrackingSystem.converter.HistoryDtoConverter;
import com.pad.TrackingSystem.dto.HistoryDto;
import com.pad.TrackingSystem.exception.CustomerNotFoundException;
import com.pad.TrackingSystem.model.Customer;
import com.pad.TrackingSystem.repositories.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistoryInternalService {

    @Autowired
    private HistoryRepository historyRepository;

    public HistoryDto getHistoryOrdersByName(String name) {
        Customer customer = historyRepository.findDestinationByName(name)
                .orElseThrow(() -> new CustomerNotFoundException(name));
        return convertToHistoryDto(customer);
    }

    private HistoryDto convertToHistoryDto(Customer customer) {
        HistoryDtoConverter historyDtoConverter = new HistoryDtoConverter();
        return historyDtoConverter.convert(customer);
    }
}
