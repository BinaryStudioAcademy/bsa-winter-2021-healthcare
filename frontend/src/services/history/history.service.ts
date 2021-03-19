import { createBrowserHistory, History } from 'history';

class HistoryService {
  #instance: History;
  constructor() {
    this.#instance = createBrowserHistory();
  }
  public push(path: string): void {
    this.#instance.push(path);
  }
}

export { HistoryService };
