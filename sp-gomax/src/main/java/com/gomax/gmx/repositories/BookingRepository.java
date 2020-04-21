package com.gomax.gmx.repositories;

import com.gomax.gmx.entities.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface BookingRepository extends CrudRepository<Booking, Long> {

}
