package com.gomax.gmx.entities;

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
public class Cinema {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String address;

    private String zipcode;

    private String city;

    private Long phone;

    @OneToMany
    private List<Pricing> price = new ArrayList<>();

    @OneToMany
    private List<Room> rooms = new ArrayList<>();

}
