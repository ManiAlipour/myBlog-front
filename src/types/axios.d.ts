import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    redirectOn401?: boolean;
  }
}
