import cloudinary from 'cloudinary';
import DatauriParser from 'datauri/parser';
import { CLOUDINARY_CONFIG } from '~/configs';

class UploadFileService {
  constructor() {
    cloudinary.v2.config(CLOUDINARY_CONFIG);
  }

  async uploadImage(file: Express.Multer.File): Promise<cloudinary.UploadApiResponse> {
    const parser = new DatauriParser();
    const dataUri = parser.format(file.originalname, file.buffer);
    const content = <string>dataUri.content;
    const res = await cloudinary.v2.uploader.upload(content);
    return res;
  }
}

export { UploadFileService };
