package com.pad.TrackingSystem.repositories;

import com.pad.TrackingSystem.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HistoryRepository extends JpaRepository<Customer, Long> {
    Optional <Customer> findDestinationByName(String name);
}
