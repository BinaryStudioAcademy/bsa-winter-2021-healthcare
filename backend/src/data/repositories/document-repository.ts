import { DocumentModel } from '../models';
import { IDocument } from '~/common/interfaces';

class Document {
  public async updateById(id: string, data: IDocument): Promise<IDocument> {
    const [ , [document]] = await DocumentModel.update(data, {
      where: { id },
      returning: true,
    });
    return document;
  }
}

export { Document };
