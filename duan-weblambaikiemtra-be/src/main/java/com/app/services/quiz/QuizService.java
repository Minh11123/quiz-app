package com.app.services.quiz;

import com.app.models.exam.Category;
import com.app.models.exam.Quiz;

import com.app.repositories.IQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService implements IQuizService {
    @Autowired
    private IQuizRepository quizRepository;
    @Override
    public Iterable<Quiz> findAll() {

        return quizRepository.findAll();
    }

    @Override
    public Optional<Quiz> findById(Long id) {

        return quizRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        quizRepository.deleteById(id);
    }

    @Override
    public Quiz save(Quiz quiz) {

        return quizRepository.save(quiz);
    }

    @Override
    public Iterable<Quiz> findAllByCategory(Category category) {
        return quizRepository.findAllByCategory(category);
    }

    @Override
    public Iterable<Quiz> findAllByCategoryAndActive(Category category) {
        return quizRepository.findByCategoryAndActive(category,true);
    }




    @Override
    public Iterable<Quiz> findAllQuizzesActive() {
        return quizRepository.findByActive(true);
    }

    @Override
    public Iterable<Quiz> findAllQuizzesByLevel(Integer level) {
        return quizRepository.findAllByLevel(level);
    }

    @Override
    public Iterable<Quiz> findAllByCategoryAndLevel(Category category, Integer level) {
        return quizRepository.findAllByCategoryAndLevel(category,level);
    }


    @Override
    public List<Quiz> findAllByCategoryAndActiveAndLevel(Integer cateId, Integer level) {
        return quizRepository.findAllByCategoryAndActiveAndLevel(cateId, level);
    }

}
