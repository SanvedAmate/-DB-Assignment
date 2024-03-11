const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    SKU: {
        type: String,
        required: true
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductInventory',
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date
    }
});

const Product = mongoose.model('Product', productSchema);

// Define Product_Category schema
const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date
    }
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

// Define Product_Inventory schema
const productInventorySchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date
    }
});

const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);

// Define Discount schema
const discountSchema = new mongoose.Schema({
    name: String,
    desc: String,
    discount_percent: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date
    }
});

const Discount = mongoose.model('Discount', discountSchema);

// Mongo connection
mongoose.connect('mongodb+srv://sanvedamate8552:Sanved@cluster0.yphck7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

