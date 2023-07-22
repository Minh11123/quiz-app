package com.app.services.test;

import com.app.models.User;
import com.app.models.exam.Test;
import com.app.repositories.ITestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestService implements ITestService{
    @Autowired
    private ITestRepository testRepository;

    @Override
    public List<Test> findAll(){
        return
                testRepository.findAll();
    }



    @Override
    public Optional<Test> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {
         testRepository.deleteById(id);
    }

    @Override
    public Test save(Test test) {
        return testRepository.save(test);
    }

    @Override
    public List<Test> findByUser(Optional<User> user) {
        return (List<Test>) testRepository.findAllByUser(user);
    }
}
