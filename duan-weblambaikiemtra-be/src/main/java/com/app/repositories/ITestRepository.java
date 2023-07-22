package com.app.repositories;

import com.app.models.User;
import com.app.models.exam.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITestRepository extends JpaRepository<Test,Long> {
    // là sẽ lấy ra được hết bài test của thằng user
    Iterable<Test> findAllByUser(Optional<User> user);
    void deleteById(Long id);
}
