import mongoose from 'mongoose'
/* Constants */
import { AppEarningsTypes, DeviceTypes, OperatingSystems } from '../constants/appConstants.js';
import { Countries } from '../data/countries.js';
import rectifyDate from '../functionalities/rectifiers/rectifyDate.js';

const rankSchema = mongoose.Schema(
    { 
        "rank": { type: Number },
        "country": { type: String },
        "os": {type: String },
        "date": {type: Date, default: rectifyDate(new Date())},
        "category": { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
        "categoryId": { type: String },
        "deviceType": { type: String },
        "earningsType": { type: String }
    });

const appSchema = mongoose.Schema( 
    {
        "app_id": { type: String },
        "name": { type: String },
        "publisher": { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher'},
        "publisher_name": { type: String },
        "publisher_id": { type: String },
        "humanized_name": { type: String },
        "icon_url": { type: String },
        "os": { type: String, default: 'android'},
        "id": { type: String },
        "appId": { type: String },
        "icon": { type: String },
        "iconUrl": { type: String },
        "url": { type: String },
        "categories": [ { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } ],
        "valid_countries": [String],
        "app_view_url": { type: String },
        "publisher_profile_url": { type: String },
        "release_date": { type: Date },
        "updated_date": { type: Date },
        "in_app_purchases": { type: Boolean },
        "shows_ads": Boolean,
        "buys_ads": Boolean,
        "rating": { type: Number, default: 0 },
        "price": { type: Number, default: 0},
        "global_rating_count": { type: Number, default: 0 },
        "rating_count": { type: Number, default: 0 },
        "rating_count_for_current_version": { type: Number, default: 0 },
        "rating_for_current_version": { type: Number, default: 0 },
        "version": { type: String, default: '1.0.0' },
        "apple_watch_enabled": { type: Boolean, default: null},
        "apple_watch_icon": { type: String },
        "imessage_enabled": { type: Boolean, default: null},
        "imessage_icon": { type: String },
        "humanized_worldwide_last_month_downloads": {
            "downloads": Number,
            "downloads_rounded": Number,
            "prefix": String,
            "string": String,
            "units": String
        },
        "humanized_worldwide_last_month_revenue": {
            "prefix": String,
            "revenue": Number,
            "revenue_rounded": Number,
            "string": String,
            "units": String
        },
        "bundle_id": String,
        "support_url": String,
        "website_url": String,
        "privacy_policy_url": String,
        "eula_url": String,
        "publisher_email": String,
        "publisher_address": String,
        "publisher_country": String,
        "feature_graphic": String,
        "short_description": { type: String },
        "advisories": [String],
        "content_rating": { type: String },
        "ranks": [rankSchema],
        "downloads_revenue_date": { type: Date }
    }, 
    { timestamps: true }
);

const App = mongoose.model('App', appSchema);

export default App;