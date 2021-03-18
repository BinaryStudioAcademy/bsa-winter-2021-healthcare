import { DocumentModel } from '../models';
import { IDocument } from '~/common/interfaces';

class DocumentRepository {
  public async updateById(id: string, data: IDocument): Promise<IDocument> {
    const [_rows, [document]] = await DocumentModel.update(data, {
      where: { id },
      returning: true           
    });           
    return document;
  } 
}

export { DocumentRepository };
