import { useState, useEffect } from 'react'
import React from 'react';
import './App.css';
import {getAllStudents} from "./client";

function App() {
const [students, setStudents] = useState([])

    const fetchStudents = () => {
        getAllStudents()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
            })
    }

    useEffect(() => {
        console.log("component is mounted")
        fetchStudents();
    }, []);

    if (students.length <= 0) {
        return "no data";
    }

    return students.map((student, index) => {
       return <p key={index}>{student.id} {student.name} {student.gender} {student.age} {student.email}</p>;
    })

}

export default App;
