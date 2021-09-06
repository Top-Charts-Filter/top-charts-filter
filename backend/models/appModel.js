import mongoose from 'mongoose'

const rankSchema = mongoose.Schema(
    { 
        "rank": Number,
        "country": String,
        "os": String,
        "date": Date

    });

const appSchema = mongoose.Schema( 
    {
        "app_id": { type: String, required: true },
        "canonical_country": { type: String, required: true },
        "name": { type: String, required: true },
        "publisher_name": { type: String },
        "publisher_id": { type: String },
        "humanized_name": { type: String },
        "icon_url": { type: String, required: true },
        "os": { type: String, required: true, default: 'android'},
        "id": { type: String , required: true},
        "appId": { type: String, required: true },
        "icon": { type: String, required: true },
        "iconUrl": { type: String, required: true },
        "url": { type: String, required: true },
        "categories": [String],
        "valid_countries": [String],
        "app_view_url": { type: String, required: true},
        "publisher_profile_url": { type: String },
        "release_date": { type: Date, required: true },
        "updated_date": { type: Date },
        "in_app_purchases": { type: Boolean, required: true, default: false },
        "shows_ads": Boolean,
        "buys_ads": Boolean,
        "rating": { type: Number, required: true, default: 0 },
        "price": { type: Number, default: 0},
        "global_rating_count": { type: Number, required: true, default: 0 },
        "rating_count": { type: Number, required: true, default: 0 },
        "rating_count_for_current_version": { type: Number, required: true, default: 0 },
        "rating_for_current_version": { type: Number, required: true, default: 0 },
        "version": { type: String, required: true, default: '1.0.0' },
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
        "short_description": { type: String, required: true, default: ''},
        "advisories": [String],
        "content_rating": { type: String },
        "ranksData": [rankSchema],
        "downloads_revenue_date": { type: Date }
    }, 
    { timestamps: true }
);

const App = mongoose.model('App', appSchema);

export default App;