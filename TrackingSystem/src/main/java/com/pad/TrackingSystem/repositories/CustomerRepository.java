package com.pad.TrackingSystem.repositories;

import com.pad.TrackingSystem.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> { }
