package com.gomax.gmx.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_show")
public class Show {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Timestamp startTime;

    private Timestamp endTime;

    private long status = 0;

    @ManyToOne
    private Film film;

    @OneToOne
    private Cinema cinema;

    @OneToOne
    private RoomShow roomShow;

}
