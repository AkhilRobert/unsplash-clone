import { Document, model, Model, Schema } from "mongoose";

interface IImageDoc extends Document {
  label: string;
  imageURL: string;
  uploadedOn: Date;
}

const imageSchema: Schema = new Schema({
  label: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  uploadedOn: {
    type: Date,
    required: true,
  },
});

const imageModel: Model<IImageDoc> = model("image", imageSchema);

export default imageModel;
