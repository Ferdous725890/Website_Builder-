import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["text", "paragraph", "image", "button", "link", "input"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    css_classes: {
      type: String, // TailwindCSS class(es)
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Auto increment order on save if not provided
componentSchema.pre("save", async function (next) {
  if (!this.order) {
    const lastComponent = await this.constructor
      .findOne({ section_id: this.section_id })
      .sort("-order");
    this.order = lastComponent ? lastComponent.order + 1 : 1;
  }
  next();
});

const Component =
  mongoose.models.Component || mongoose.model("Component", componentSchema);

export default Component;
