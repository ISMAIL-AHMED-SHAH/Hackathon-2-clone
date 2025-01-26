import { groq } from "next-sanity";


export const allproducts = groq`*[_type == "product"]`;

export const fourproducts = groq`*[_type == "product"]{0..3}`;