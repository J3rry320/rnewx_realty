import mongoose, { Model, Schema } from "mongoose";

export const createModel = <T>(name: string, schema: Schema<T>): Model<T> => {
  return (mongoose.models[name] as Model<T>) || mongoose.model<T>(name, schema);
};
