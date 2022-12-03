import React from "react";
import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export const getDwellings = async () => {
    const response = await api.get('/dwelling')
    console.log(response.data.dwelling)
    return response.data.dwelling
}