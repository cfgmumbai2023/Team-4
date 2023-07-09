import axios from "axios";

export const baseUrl = "http://localhost:5000/jeet";

export const postRequest = async (body) => {
    // const response = await fetch("http://localhost:5000/jeet/creator/video/create", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body,
    // });
    const response=await axios.post("http://localhost:5000/jeet/creator/video/create",body);

    const data = await response.json();

    if (!response.ok) {
        let message;

        if (data?.message) {
            message = data.message;
        } else {
            message = data;
        }

        return { error: true, status: response.status, message };
    }

    return data;
};

export const getRequest = async (url) => {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
        let message = "An error occured...";

        if (data?.message) {
            message = data.message;
        }

        return { error: true, status: response.status, message };
    }

    return data;
};