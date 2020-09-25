import mongoose from "mongoose"

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true, 
  }
})

const articleModel = mongoose.model("Article", articleSchema)

export default articleModel