package com.gomax.gmx.controllers;

import com.gomax.gmx.entities.Booking;
import com.gomax.gmx.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/booking")
public class BookingController {

    private BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {this.bookingService = bookingService;}

    @PostMapping("")
    public ResponseEntity<Booking> postBooking(@RequestBody Booking b) {
        return new ResponseEntity<>(this.bookingService.saveBooking(b),
                HttpStatus.OK);
    };

    @GetMapping("")
    public List<Booking> getBooking() { return this.bookingService.getAllBooking(); }

}
