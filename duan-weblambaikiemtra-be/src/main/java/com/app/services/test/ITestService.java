package com.app.services.test;

import com.app.models.User;
import com.app.models.exam.Test;
import com.app.services.IService;

import java.util.List;
import java.util.Optional;

public interface ITestService extends IService<Test> {
    List<Test> findByUser(Optional<User> user);
    List<Test> findAll();
    void delete(Long id);
}
