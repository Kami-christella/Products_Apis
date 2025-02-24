import Product from "../models/productModal.js";

export const createProduct=async(req, res)=>{
//productImage 

    try{
       const {productName,productPrice,productCategory,productDiscount}=req.body;
       const newProduct=new Product({productName,productPrice,productCategory,productDiscount});

       await newProduct.save();

       res.status(201).json({success:true, message: "Product created successfully",Product: newProduct});


    } catch(error){
       res.status(500).json({ success: false, message: "server Error", error: error.message});
       
    }
}

export const getAllProduct=async(req,res)=>{
   try{
      const products= await Product.find();
      res.status(200).json({success:true,products})

   } catch(error){
      res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
}

export const getProductById=async(req,res)=>{
   try{
      const {id}= req.params;
      const products=await Product.findById(id);
       if(!products){
        return res.status(404).json({ success: false, message: "Product not found"});
       }
       res.status(200).json({ success: true, products});
   } catch(error){
      res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
}

export const deleteProductById=async(req,res)=>{
  try{
    const {id} =req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({ success: false, message: "Product not found"});
     }
     res.status(200).json({ success: true, message: "Product  deleted successfull"});
  }catch(error){
   res.status(500).json({ success: false, message: "server Error", error: error.message});
  }
}

export const updateProductById= async(req,res)=>{
   try{
    const {id}=req.params;
    const updatedData=await Product.findByIdAndUpdate(id,req.body);
     
    if(!updatedData){
      return res.status(404).json({ success: false, message: "Product not found"});
     }
     res.status(200).json({ success: true, message: "Product updated successfull"});
   }catch(error){
      res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
}