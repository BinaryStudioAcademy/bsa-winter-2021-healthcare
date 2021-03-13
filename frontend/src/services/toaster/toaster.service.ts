import { BasicToastrOptions, toastr } from 'react-redux-toastr';

class ToasterService {
  #instance = toastr;

  error(title: string, message: string, options?: BasicToastrOptions): void {
    this.#instance.error(title, message, options);
  }

  success(title: string, message: string, options?: BasicToastrOptions): void {
    this.#instance.success(title, message, options);
  }

  info(title: string, message: string, options?: BasicToastrOptions): void {
    this.#instance.success(title, message, options);
  }
}

export default ToasterService;
