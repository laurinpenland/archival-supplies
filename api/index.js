var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var response = require('./response');

app.use(express.json());

var database;

/*
IProduct {
	_id: string;
	vendor: <ObjectId>;
	productNum: string;
	description: string;
  packQuantity: number;
  productType: <ObjectId>;
  notes: string;
	productUrl: string;
	imageUrl: string;
}

IVendor {
	_id: string;
	name: string;
	venderUrl: string;
}

IProductType {
  _id: string:
  name: string;
}

*/

/*-----------------add product, vendor, material type to db-------------*/
/*request Body {vendor, productNum, description, packQuantity, productType, notes, productUrl, imageUrl}*/
app.post('/addProduct', function(req, res) {
  //res.send('This page adds a product');
  //req.body = "This page adds a product";

  const product = {
  	vendor: req.body.vendor,
  	productNum: req.body.productNum,
  	description: req.body.description,
    packQuantity: req.body.packQuantity,
    productType: req.body.productType,
    notes: req.body.notes,
  	productUrl: req.body.productUrl,
  	imageUrl: req.body.imageUrl
  }

  database.collection('products').insertOne(product, function(err, result){
    if(err) {
      res.status(500);
      res.send(response.error('There was an error inserting the document.'));
      return;
    }

    res.send(response.success(result.ops[0]));
  });

})

/*request Body {name, vendorUrl}*/
app.post('/addVendor', function(req, res) {

  const vendor = {
    name: req.body.name,
    vendorUrl: req.body.vendorUrl
  }
  database.collection('vendors').insertOne(vendor, function(err, result){
    if(err) {
      res.status(500);
      res.send(response.error('There was an error inserting the document.'));
      return;
    }

    res.send(response.success(result.ops[0]));
  });

})
/*request Body {name}*/
app.post('/addType', function(req, res) {

  const type = {
    name: req.body.name,
  }
  database.collection('types').insertOne(type, function(err, result){
    if(err) {
      res.status(500);
      res.send(response.error('There was an error inserting the document.'));
      return;
    }

    res.send(response.success(result.ops[0]));
  });

})

/*-------------delete product, vendor, type from db-----------------*/

/*request body {_id}*/
app.post('/deleteProduct', function(req, res) {

  if(!ObjectId.isValid(req.body._id)){
    res.status(400);
    res.send(response.error('A valid _id is required.'));
    return;
  }

  database.collection('products').deleteOne({_id: ObjectId(req.body._id)}, function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error deleting the product.'));
      return;
    }

    res.send(response.success({deletedCount: result.deletedCount}));
  });
})
/*request body {_id}*/
app.post('/deleteVendor', function(req, res) {
  if(!ObjectId.isValid(req.body._id)){
    res.status(400);
    res.send(response.error('A valid _id is required.'));
    return;
  }

  database.collection('vendors').deleteOne({_id: ObjectId(req.body._id)}, function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error deleting the vendor.'));
      return;
    }

    res.send(response.success({deletedCount: result.deletedCount}));
  });
})

/*request body {_id}*/
app.post('/deleteType', function(req, res) {
  if(!ObjectId.isValid(req.body._id)){
    res.status(400);
    res.send(response.error('A valid _id is required.'));
    return;
  }

  database.collection('types').deleteOne({_id: ObjectId(req.body._id)}, function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error deleting the material type.'));
      return;
    }

    res.send(response.success({deletedCount: result.deletedCount}));
  });
})

/*---------------------update product, vendor, type---------------------------*/
/*request body {_id, vendor, productNum, description, packQuantity, productType, notes, productUrl, imageUrl}*/
app.post('/updateProduct', function(req, res) {
  if(!ObjectId.isValid(req.body._id)){
    res.status(400);
    res.send(response.error('A valid _id is required.'));
    return;
  }

  const updatedProduct = {
    vendor: req.body.vendor,
  	productNum: req.body.productNum,
  	description: req.body.description,
    packQuantity: req.body.packQuantity,
    productType: req.body.productType,
    notes: req.body.notes,
  	productUrl: req.body.productUrl,
  	imageUrl: req.body.imageUrl
  }

  database.collection('products').updateOne({_id: ObjectId(req.body._id)}, { $set:{_id: ObjectId(req.body._id), ...updatedProduct}}, function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error updating the product.'));
      return;
    }

    res.send(response.success({modifiedCount: result.modifiedCount}));
  });
})

/* request body {_id, name, vendorUrl} */
app.post('/updateVendor', function(req, res) {
  if(!ObjectId.isValid(req.body._id)){
    res.status(400);
    res.send(response.error('A valid _id is required.'));
    return;
  }

  const updatedVendor = {
    name: req.body.name,
    vendorUrl: req.body.vendorUrl
  }

  database.collection('vendors').updateOne({_id: ObjectId(req.body._id)}, { $set:{_id: ObjectId(req.body._id), ...updatedVendor}}, function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error updating the product.'));
      return;
    }

    res.send(response.success({modifiedCount: result.modifiedCount}));
  });
})

/* request body {_id, name} */
app.post('/updateType', function(req, res) {
  if(!ObjectId.isValid(req.body._id)){
    res.status(400);
    res.send(response.error('A valid _id is required.'));
    return;
  }
  database.collection('types').updateOne({_id: ObjectId(req.body._id)}, { $set:{_id: ObjectId(req.body._id), name: req.body.name}}, function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error updating the product.'));
      return;
    }

    res.send(response.success({modifiedCount: result.modifiedCount}));
  });

})

/*------------------------------get requests----------------------------------*/

app.get('/getAllProducts', function(req, res) {
  database.collection('products').find().toArray(function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error finding products.'));
      return;
    }

    res.send(response.success(result));
  });
})


app.get('/product/:id', function(req, res) {
  if(!ObjectId.isValid(req.params.id)){
    res.status(400);
    res.send(response.error('A valid _id is required.'));
    return;
  }
  database.collection('products').findOne({_id: ObjectId(req.params.id)}, function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error finding the product.'));
      return;
    }

    res.send(response.success(result));
  });
})

app.get('/getAllVendors', function(req, res) {
  database.collection('vendors').find().toArray(function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error finding vendors.'));
      return;
    }

    res.send(response.success(result));
  });

})

app.get('/getAllTypes', function(req, res) {
  database.collection('types').find().toArray(function(err, result){
    if(err){
      res.status(500);
      res.send(response.error('There was an error finding types.'));
      return;
    }

    res.send(response.success(result));
  });

})


app.listen(8080, function() {
  MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, function(err, client){
    if(err) throw err;

    database = client.db('penland-final-project');
  });
});
