const defaultActionCreator = <P>(payload: P) => ({
  payload,
});

export const createAction = <P>(
  type: string,
  actionCreator = defaultActionCreator,
) => {
  const creator = (payload: P) => ({
    ...actionCreator(payload),
    type,
  });

  return Object.assign(creator, { type });
};

export type InferValueTypes<T> = T extends { [key: string]: infer P }
  ? P
  : never;

export type GetReturnType<T> = T extends (...args: never[]) => infer R
  ? R
  : never;

export type GetActionType<T> = GetReturnType<InferValueTypes<T>>;
