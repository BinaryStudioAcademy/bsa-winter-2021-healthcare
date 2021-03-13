import { BasicToastrOptions, Toastr, toastr, ToastrEmitter } from 'react-redux-toastr';

class NotificationService {
  #instance: ToastrEmitter;

  constructor() {
    this.#instance = toastr;
  }

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

export default NotificationService;
