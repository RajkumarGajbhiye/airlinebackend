const { Product } = require("../models/airlinemodel.js");
const {cleanUp,whiteListFields} = require("../utility/common.js");


//**get data and filter some data**:
/*
const getDetails = async (req, res) => {
  try {
  
    const query = cleanUp(req.query);
    const data = await Product.find(query);
    res.json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
*/
//pagination:
const getDetails = async (req, res) => {
  try {
      
     let query = cleanUp(req.query)
    let findQuery = whiteListFields(query)
      let queryString = Product.find(findQuery)

      
   if(query.limit && query.page){
        queryString = queryString.skip(query.limit * (query.page-1)).limit(query.limit)
}
const totalCount = await Product.find().count()
      const data = await queryString
      //console.log(data)
      res.json({
          status: "success",
          result: data.length,
          totalCount,
          data
      })
  } catch (err) {
      res.status(500).json({
          status: "error",
          message: err.message  
      })
  }

}

//**find data by id**
const getDetailsById = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    res.json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

//**insert data**
const insertDetails = (req, res) => {
  const { name,country,slogan,established, logo} = req.body;
  const airline_data = new Product({
    name,
    country,
    slogan,
    established,
    logo
  });
  airline_data
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => console.log(err, "Error"));
};



  //**update data**
const updateDetails = async(req,res)=>{
  try{
   
    const data = await Product.findByIdAndUpdate(req.body._id,{$set:req.body})
    //console.log(data)
    res.json({
      status: "success",
      data
    });
  }catch(err){
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
}

//***delete data***

const deleteDetails = async(req,res)=>{
  try{
    const data = await Product.deleteOne({_id: req.body._id})
    console.log(data)
    res.json({
      status: "success",
      data
    });
  }catch(err){
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
}

module.exports = { getDetails, getDetailsById,insertDetails,updateDetails,deleteDetails};
