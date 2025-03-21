import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  websiteName: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, /* User Id Track */
  sections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seciton",
    },
  ], /* Section Track */
  metaTitle: { type: String, default: "" },
  metaDescription: { type: String, default: "" },
  metaKeyword: { type: String, default: "" },
});

const Website =
  mongoose.models.Website || mongoose.model("Website", websiteSchema);

export default Website;
