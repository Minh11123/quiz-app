package com.app.repositories;

import com.app.models.exam.Category;
import com.app.models.exam.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDocumentRepository extends JpaRepository<Document,Integer> {
    Iterable<Document> findAllByCategoryAndLevel(Category category, Integer level);
}
