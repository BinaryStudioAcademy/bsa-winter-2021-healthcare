import { BasicToastrOptions, toastr, ToastrEmitter } from 'react-redux-toastr';

class NotificationService {
  #instance: ToastrEmitter;

  constructor() {
    this.#instance = toastr;
  }

  _getFullMessage(messages: string[]): string {
    return messages.join(', ');
  }

  error(title: string, messages: string[], options?: BasicToastrOptions): void {
    this.#instance.error(title, this._getFullMessage(messages), options);
  }

  success(title: string, messages: string[], options?: BasicToastrOptions): void {
    this.#instance.success(title, this._getFullMessage(messages), options);
  }

  info(title: string, messages: string[], options?: BasicToastrOptions): void {
    this.#instance.info(title, this._getFullMessage(messages), options);
  }
}

export default NotificationService;
