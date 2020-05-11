package com.pad.TrackingSystem.service;

import com.pad.TrackingSystem.converter.HistoryDtoConverter;
import com.pad.TrackingSystem.dto.HistoryDto;
import com.pad.TrackingSystem.model.Customer;
import com.pad.TrackingSystem.repositories.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HistoryInternalService {

    @Autowired
    private HistoryRepository historyRepository;

    public List<HistoryDto> getDestinationsHistoryByName(String name) {
        List<HistoryDto> customer = historyRepository.findDestinationsByName(name)
                .stream()
                .map(HistoryDtoConverter::convert)
                .collect(Collectors.toList());
        return customer;
    }

    private HistoryDto convertToHistoryDto(Customer customer) {
        HistoryDtoConverter historyDtoConverter = new HistoryDtoConverter();
        return historyDtoConverter.convert(customer);
    }
}
