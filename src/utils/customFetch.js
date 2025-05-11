import axios from "axios";

// https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#3b3e334c-df44-47ef-bb4c-a1f71e19604c

const productUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({ baseURL: productUrl });
