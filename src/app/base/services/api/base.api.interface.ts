export interface BaseApiInterface {
  provider: BaseAPIProvider;
  getProvider(): BaseAPIProvider;
}

export interface BaseAPIProvider {
  name: string;
  url: string;
}