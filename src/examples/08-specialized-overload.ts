// "max-classes-per-file": [true, 1]
/* tslint:disable */
class RandomHandler {
  public execute(): string {
    return 'Run RandomHandler ...';
  }
}

class ReversedHandler {
  public execute(): string {
    return 'Run ReversedHandler ...';
  }
}

class Handler {
  public execute(): string {
    return 'Run Handler ...';
  }
}


class HandlerFactory {
  public getHandler(type: 'Random'): RandomHandler;
  public getHandler(type: 'Reversed'): ReversedHandler;
  public getHandler(type: string): Handler; // non-specialized signature
  public getHandler(type: string): Handler { // implementation signature
    switch (type) {
      case 'Random':
        return new RandomHandler();
      case 'Reversed':
        return new ReversedHandler();
      default:
      return new Handler();
    }
  }
}

const instance = new HandlerFactory();
console.log(instance.getHandler('Random').execute());
