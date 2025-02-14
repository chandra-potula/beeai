import { ListAgentsRequest } from '@agentcommunicationprotocol/sdk/types.js';

import { Agent as SdkAgent } from '@agentcommunicationprotocol/sdk/types.js';

export type Agent = SdkAgent & {
  title?: string;
  fullDescription?: string;
  avgRunTimeSeconds?: number;
  avgRunTokens?: number;
  framework?: string;
  licence?: string;
  authors?: string[];
  ui?: 'chat';
};

export type ListAgentsParams = ListAgentsRequest['params'];

export interface CreateProviderBody {
  location: string;
}
