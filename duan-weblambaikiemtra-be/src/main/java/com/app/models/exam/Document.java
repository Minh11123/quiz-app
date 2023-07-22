package com.app.models.exam;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "document")
@Data
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 5000)
    private String content;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @Column(name = "level")
    private int level;
}
