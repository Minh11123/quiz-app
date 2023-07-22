package com.app.services.document;

import com.app.models.exam.Category;
import com.app.models.exam.Document;
import com.app.repositories.IDocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DocumentService implements IDocumentService {
    @Autowired
    private IDocumentRepository documentRepository;

    @Override
    public Iterable<Document> findAll() {
        return documentRepository.findAll();
    }

    @Override
    public Document save(Document document) {
        return documentRepository.save(document);
    }

    @Override
    public Iterable<Document> findAllByCategoryAndLevel(Category category, Integer level) {
        return documentRepository.findAllByCategoryAndLevel(category,level);
    }

    @Override
    public void deletedById(Integer id) {
        documentRepository.deleteById(id);
    }

    @Override
    public Optional<Document> findById(Integer id) {
        return documentRepository.findById(id);
    }


}
