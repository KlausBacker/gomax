package com.gomax.gmx.classes;

import com.gomax.gmx.entities.Show;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import javax.persistence.Id;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Show_status {
    @Id
    private long id;

    private String name;

}
