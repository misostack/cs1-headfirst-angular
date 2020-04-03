import { BaseEntityProviderInterface } from './base.entity.interface';

export function Endpoint(path: string): ClassDecorator {
  if (path === void 0) { path = ''; }
  // tslint:disable-next-line: ban-types
  return (target: Function) => {
    target.prototype.getEndpoint = () => {
      return path;
    };
  };
}

export function EntityProvider(provider: BaseEntityProviderInterface): ClassDecorator {
  // tslint:disable-next-line: ban-types
  return (target: Function) => {
    target.prototype.entity = provider;
  };
}
