package com.pad.TrackingSystem.controller;

import com.pad.TrackingSystem.dto.HistoryDto;
import com.pad.TrackingSystem.model.Customer;
import com.pad.TrackingSystem.repositories.CustomerRepository;
import com.pad.TrackingSystem.service.HistoryInternalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TrackingController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private HistoryInternalService historyInternalService;

    @GetMapping("/customers")
    @ResponseStatus(HttpStatus.OK)
    public List<Customer> list() {
        return customerRepository.findAll();
    }

    @GetMapping("/customer/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Customer getById(@PathVariable("id") long id) {
        return customerRepository.getOne(id);
    }

    @GetMapping("/customer/name/{name}")
    @ResponseStatus(HttpStatus.OK)
    public List<HistoryDto> getHistoryOrdersOfCustomer(@PathVariable("name") String name) {
        return historyInternalService.getDestinationsHistoryByName(name);
    }
}
