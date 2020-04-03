import { BaseAPIProvider } from './base.api.interface';

export function Provider(provider: BaseAPIProvider): ClassDecorator {
  // tslint:disable-next-line: ban-types
  return (target: Function) => {
    target.prototype.getEndpoint = () => {
      return provider;
    };
  };
}
