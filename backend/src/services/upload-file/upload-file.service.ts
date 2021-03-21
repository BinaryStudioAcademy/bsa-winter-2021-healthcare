import cloudinary from 'cloudinary';
import DatauriParser from 'datauri/parser';
import { CLOUDINARY_CONFIG } from '~/configs';

class UploadFile {
  constructor() {
    cloudinary.v2.config(CLOUDINARY_CONFIG);
  }

  async uploadFile(file: Express.Multer.File): Promise<cloudinary.UploadApiResponse> {
    const parser = new DatauriParser();
    const dataUri = parser.format(file.originalname, file.buffer);
    const content = dataUri.content as string;
    return cloudinary.v2.uploader.upload(content);
  }
}

export { UploadFile };
