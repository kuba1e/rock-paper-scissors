import { messageToEmit } from 'shared/config';

export type KeysMessageToEmit = keyof typeof messageToEmit;
export type ValuesMessageToEmit = typeof messageToEmit[KeysMessageToEmit];
