import { groq } from "next-sanity";


export const allproducts = groq`*[_type == "product"]`;

export const fourproducts = groq`*[_type == "product"]{0..3}`;

export const threeproducts = groq`*[_type == "product"]{0..2}`;

export const relatedProductsQuery = groq`
  *[_type == "product" && category == $category && slug.current != $slug][0..3] {
    _id,
    name,
    price,
    image,
    slug,
    rating {
      rate,
      count
    }
  }
`;

export const featuredproducts = `*[_type == "product" && category == "Chair"][0...4]{
    _id,
    name,
    category,
    price,
    image {
      asset->{
        url
      }
    },
    slug {
      current
    }
  }`;
  
  export const latestproducts = `*[_type == "product" && category == "Chair" && isFeaturedProduct == true][0...6]{
  _id,
  name,
  price,
  originalPrice,
  sale,
  image {
    asset->{
      url
    }
  },
  slug {
    current
  }
}`;
  