package com.app.repositories;

import com.app.models.exam.Category;
import com.app.models.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IQuizRepository extends JpaRepository<Quiz,Long> {
    Iterable<Quiz> findAllByCategory(Category category);
    Iterable<Quiz> findByActive(Boolean b);
    Iterable<Quiz> findAllByLevel(Integer level);
    Iterable<Quiz> findAllByCategoryAndLevel(Category category,Integer level);
    Iterable<Quiz> findByCategoryAndActive(Category category, Boolean b);
    @Query(value = "SELECT * FROM quiz where category_id = :category_id and level = :level and active = true ORDER BY CONVERT(SUBSTR(title, 5), UNSIGNED INTEGER) ASC, title ASC", nativeQuery = true)
    List<Quiz> findAllByCategoryAndActiveAndLevel(@Param("category_id") Integer cateId, @Param("level") Integer level);


}
