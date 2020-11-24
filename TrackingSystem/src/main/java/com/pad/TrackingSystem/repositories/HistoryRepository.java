package com.pad.TrackingSystem.repositories;

import com.pad.TrackingSystem.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepository extends JpaRepository<Customer, Long> {
    //@Query("select c from Customer c where c.destination = ?1")
    List<Customer> findDestinationsByName(String name);
}
