export default function createPikchr(Module?: object): Promise<Pikchr.Instance>;

export namespace Pikchr {
  export interface Instance {
    pikchr(text: string, options: Options): Result;
  }

  export interface Options {
    class?: string;
    plaintext_errors?: boolean;
    dark_mode?: boolean;
  }

  export interface Result {
    output: string;
    width: number;
    height: number;
  }
}
