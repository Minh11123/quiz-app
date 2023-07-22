package com.app.services.document;

import com.app.models.exam.Category;
import com.app.models.exam.Document;

import java.util.Optional;


public interface IDocumentService {
    Iterable<Document> findAll();
    Document save(Document document);
    Iterable<Document> findAllByCategoryAndLevel(Category category, Integer level);
    void deletedById(Integer id);
    Optional<Document> findById(Integer id);
}
