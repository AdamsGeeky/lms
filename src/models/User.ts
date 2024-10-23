import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../types/authTypes';

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'instructor', 'admin'], required: true }
});

export default mongoose.model<IUser & Document>('User', UserSchema);
