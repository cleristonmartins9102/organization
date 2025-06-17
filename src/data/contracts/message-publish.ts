export interface MessagePublish {
  publish(params: MessagePublish.Param): Promise<boolean>
}

export namespace MessagePublish {
  export type Param = {
    payload: Object
    queue: string
  }
}