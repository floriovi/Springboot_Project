package com.example.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController // Marks the class as an endpoint the client can consume
@RequestMapping(path = "api/v1/students") // This marks
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        List<Student> students = Arrays.asList(
                new Student(
                        1L,
                        "Vincenzo",
                        "vincenzo@vivacode.edu",
                        Gender.MALE,
                        23),
                new Student(
                        2L,
                        "Vanessa",
                        "vanessa@vivacode.edu",
                        Gender.FEMALE,
                        23)
        );
        return students;
    }
}
