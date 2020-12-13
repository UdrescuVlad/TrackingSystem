package com.pad.TrackingSystem.exception;

import org.springframework.http.HttpStatus;

public class ApiException extends RuntimeException {

    private final HttpStatus responseHttpStatus;

    public ApiException(HttpStatus responseHttpStatus, String message) {
        super(message);
        this.responseHttpStatus = responseHttpStatus;
    }

    public HttpStatus getResponseHttpStatus() {
        return responseHttpStatus;
    }
}
  
