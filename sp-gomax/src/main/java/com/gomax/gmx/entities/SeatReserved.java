package com.gomax.gmx.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SeatReserved {

    @Id
    @GeneratedValue
    private Long id;

    private String ref;

    private Boolean status;

    @OneToOne
    private SeatShow seatShow;

}
