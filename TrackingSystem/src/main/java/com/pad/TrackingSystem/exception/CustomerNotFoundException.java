package com.pad.TrackingSystem.exception;

public class CustomerNotFoundException extends ResourceNotFoundException {

    public CustomerNotFoundException(String name) {
        super(name + " has not been found!");
    }

}
