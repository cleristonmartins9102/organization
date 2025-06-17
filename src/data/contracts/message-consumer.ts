export interface MessageConsumer<P> {
  consumer(params: MessageConsumer.Param<P>): Promise<void>
}

export namespace MessageConsumer {
  export type Param<P> = {
    handler: (msg: P) => Promise<void>
    queue: string
  }
}