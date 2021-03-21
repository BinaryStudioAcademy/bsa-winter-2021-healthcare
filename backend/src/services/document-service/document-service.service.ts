import { documentRepository } from '~/data/repositories';
import { IDocument } from '~/common/interfaces';

class Document {
  public async updateDocument(id: string, data: IDocument): Promise<IDocument> {
    return documentRepository.updateById(id, data);
  }
}

export { Document };
