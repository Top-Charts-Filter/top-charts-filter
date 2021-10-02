import mongoose from 'mongoose';

const publisherSchema = mongoose.Schema(
    {
        publisher_name: { type: String },
        publisher_id: { type: String, required: true },
        os: { type: String },
        applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'App'}]
    },
    {
        timestamps: true
    }
);

const Publisher = mongoose.model('Publisher', publisherSchema);

export default Publisher;