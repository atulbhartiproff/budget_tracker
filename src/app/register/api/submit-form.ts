import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

// Connect to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

// Define the schema and model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const FormModel = mongoose.models.Form || mongoose.model('Form', formSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      const formData = new FormModel(req.body);
      await formData.save();
      res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving form data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
