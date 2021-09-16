import mongoose from 'mongoose'

const categorySchema = mongoose.Schema( 
    {
        os: { type: String, required: true },
        categoryName: { type: String, required: true },
        // this categoryId comes from the SensorTower database
        categoryId: { type: String, required: true,  unique: true },
        apps: [ { type: mongoose.Schema.Types.ObjectId, ref: 'App'} ],
        subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
        parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null},
        fetchable: { type: Boolean, default: false}

    } , 
    { timestamps: true});

const Category = mongoose.model('Category', categorySchema);

export default Category;