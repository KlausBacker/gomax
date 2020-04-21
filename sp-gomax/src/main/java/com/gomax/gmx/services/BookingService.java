package com.gomax.gmx.services;

import com.gomax.gmx.entities.Booking;
import com.gomax.gmx.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    private BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {this.bookingRepository = bookingRepository;}

    public Booking saveBooking(Booking b) {
        return this.bookingRepository.save(b);
    }

    public List<Booking> getAllBooking() {
        return (List<Booking>) bookingRepository.findAll();
    }
}
