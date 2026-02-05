// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { StainlessProject1 } from '../client';

export abstract class APIResource {
  protected _client: StainlessProject1;

  constructor(client: StainlessProject1) {
    this._client = client;
  }
}
