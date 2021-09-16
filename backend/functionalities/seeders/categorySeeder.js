/* this module will seed the database with the default categories in the system */

/* this file is not a part of server files, it is called seperately */

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from '../../configurations/connectDatabase.js'
import { FAILURE } from '../../constants/globalConstants.js'
import { OperatingSystems } from '../../constants/appConstants.js'

/* Model */
import Category from '../../models/categoryModel.js'
/* Data */
import { categories, categoriesAndSubcategoriesData } from '../../data/categories.js'

dotenv.config();

connectDB();

async function seedCategories(){
    /* this function will seed the database with default categories */
    try {
        /* first destroy everyting if any */
        await Category.deleteMany();

        await Category.insertMany(categories);
        /* First insert all the cateogories */

        /* Now insert subcategory and parent information */
 
        for(let item of categoriesAndSubcategoriesData){
            /* For each parent category */
          
            let parentCategoryId = item.categoryId;
            let parentCategory = await Category.findOne( { categoryId: parentCategoryId } );
            
            for(let subcategory of item.subcategories){
                /* for each subcategory of this parent */

                let eachSubCategory = await Category.findOne( { categoryId: subcategory} );

                /* relate this subcategory with its parent */
                eachSubCategory.parent = parentCategory._id;
                eachSubCategory.save();
                
                /* also update the parent, declaring that parent has a child */
                await Category.findOneAndUpdate(
                    {categoryId: parentCategoryId},
                    {$push: {subCategories: eachSubCategory._id}})
            }
        }

        console.log("Database seeded with categories.".yellow.inverse);

        process.exit();
        

    } catch (error) {
        
        console.error(`Error occurred while seeding: ${error}`.red.inverse);

        process.exit(FAILURE);
    }
}

seedCategories();