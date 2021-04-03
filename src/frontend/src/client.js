import fetch from "unfetch";

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

// This is fetched from our backend StudentController
export const getAllStudents = () =>
    fetch("api/v1/students")
        .then(checkStatus);



