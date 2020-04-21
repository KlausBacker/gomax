package com.gomax.gmx.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Float price;

    @OneToOne (cascade = CascadeType.ALL)
    private SeatReserved seatReserved;

    @ManyToOne
    private TreatReserved treatReserved;

    @OneToOne
    private ReservationClient reservationClient;

    @OneToOne
    private Show show;

}
