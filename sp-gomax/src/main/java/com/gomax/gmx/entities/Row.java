package com.gomax.gmx.entities;


import com.gomax.gmx.entities.Seat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Row {
    @Id
    private long id;

    @OneToMany
    private List<Seat> seats = new ArrayList<>();

}
