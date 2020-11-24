package com.pad.TrackingSystem.service;

import com.pad.TrackingSystem.converter.HistoryDtoConverter;
import com.pad.TrackingSystem.dto.HistoryDto;
import com.pad.TrackingSystem.model.Customer;
import com.pad.TrackingSystem.repositories.HistoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HistoryInternalService {

    private final HistoryRepository historyRepository;

    public HistoryInternalService(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    public List<HistoryDto> getDestinationsHistoryByName(String name) {
        return historyRepository.findDestinationsByName(name)
                .stream()
                .map(HistoryDtoConverter::convert)
                .collect(Collectors.toList());
    }

    private HistoryDto convertToHistoryDto(Customer customer) {
        return HistoryDtoConverter.convert(customer);
    }
}
