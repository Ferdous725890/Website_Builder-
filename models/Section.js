import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  websiteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Webiste",
    required: true,
  },
  sectionName: { type: String, required: true },
  sectionOrder: { type: Number, required: true },
  backgroundColor: { type: String, default: "#ffffff" },
  padding: { type: String, default: "p-1" },
  margin: { type: String, default: "m-1" },
  layout: {
    type: String,
    enum: ["w-full", "container"],
    default: "container",
  },
  component: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
    },
  ],
});

// Auto Order Number Create
sectionSchema.pre("save", async function (next) {
  if (!this.order) {
    const lastSection = await this.constructor.findOne().sort("-order");
    this.order = lastSection ? lastSection.order + 1 : 1;
    next();
  }
});

const Section =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);

export default Section;
