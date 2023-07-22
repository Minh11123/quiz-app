package com.app.controller;


import com.app.models.exam.Category;
import com.app.models.exam.Document;
import com.app.repositories.IDocumentRepository;
import com.app.services.document.IDocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;

@RestController
@CrossOrigin("*")
@RequestMapping("/document")
public class DocumentController {

    @Autowired
    private IDocumentService iDocumentService;



    @GetMapping("")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(iDocumentService.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createDoc(@RequestBody Document document){
        return new ResponseEntity<>(iDocumentService.save(document),HttpStatus.OK);
    }

    @GetMapping("/{cateId}/{level}")
    public ResponseEntity<?> findAllByCategoryAndLevel(@PathVariable Long cateId,@PathVariable Integer level ){
        Category category = new Category();
        category.setId(cateId);
        return new ResponseEntity<>(iDocumentService.findAllByCategoryAndLevel(category,level), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Integer id){
        iDocumentService.deletedById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<?> update(@RequestBody Document document){
        return  new ResponseEntity<>(iDocumentService.save(document),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id){
        System.out.println("documentId : " + id);
        return new ResponseEntity<>(iDocumentService.findById(id),HttpStatus.OK);
    }
}
