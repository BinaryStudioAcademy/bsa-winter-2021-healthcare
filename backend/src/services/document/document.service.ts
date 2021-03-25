import { DoctorKey } from '~/common/enums';
import { document as documentRepository } from '~/data/repositories';
import { IDoctor, IDocument } from '~/common/interfaces';
import { doctor as doctorService } from '~/services/services';

class Document {
  public async createDocument(data: IDocument): Promise<IDocument> {
    return documentRepository.addDocument(data);
  }

  public async updateDocument(id: string, data: IDocument): Promise<IDocument> {
    return documentRepository.updateById(id, data);
  }

  public async addDocumentIdToDoctor(document: IDocument, userId: string): Promise<IDoctor> {
    const doctor = await doctorService.getByUserId(userId);
    const newDoctorData = {
      ...doctor as IDoctor,
      [DoctorKey.DOCUMENT_ID]: document.id as string,
    };
    const updatedDoctor = await doctorService.updateByUserId(userId, newDoctorData);
    return updatedDoctor;
  }
}

export { Document };
