import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const productSchema = new Schema(
    {
        productName:{
          type: String,
          required:true
      },
      productPrice:{
        type: String,
        required:true
    },
    productCategory:{
        type: String,
        required:true
    },
    productDiscount:{
        type: String,
        required:true,
        default:0
    },
    // productImage:{
    //     type: String,
    //     required:true
    // },
  },
    {
        timestamps:true
    }
        
)

const Product = model("Product", productSchema);

export default Product;
