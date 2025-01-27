export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule: any) => Rule.required().error('Name is required'),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
          maxLength: 96,
        },

      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        description: 'Upload an image of the product.',
      },
      { 
        name: 'rating', 
        title: 'Rating', 
        type: 'object', 
        fields: [
            { name: 'rate', title: 'Rate', type: 'number' },
            { name: 'count', title: 'Count', type: 'number' }
        ] 
    },
      {
        name: 'price',
        type: 'string',
        title: 'Price',

      },
      {
        name: "discountPrice",
        type: "number",
        title: "Discount Price",
    },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: any) =>
          Rule.max(150).warning('Keep the description under 150 characters.'),
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
        validation: (Rule: any) =>
          Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Is Featured Product',
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
        validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'Chair', value: 'Chair' },
            { title: 'Sofa', value: 'Sofa' },
            { title: 'Appliances', value: 'Appliances' },
            { title: 'Clothing', value: 'Clothing' },
            { title: 'Bags', value: 'Bags' },
            { title: 'Accessories', value: 'Accessories' },
            { title: 'Beauty', value: 'Beauty' },
            { title: 'Watches', value: 'Watches' },
          ],
        },
        validation: (Rule: any) => Rule.required().error('Category is required'),
      },
    ],
  };