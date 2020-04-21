package com.gomax.gmx.classes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import javax.persistence.Id;


@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Seat_status {

    @Id
    private long id;

    private String name;


}
