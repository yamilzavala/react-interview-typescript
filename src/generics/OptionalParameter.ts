export type Event = {
    type: 'LOG_IN',
    payload: {
        userId: string
    }
} | {
    type: 'SIGN_OUT',
}

const sendEvent = <T extends  Event['type']>(
    ...args: Extract<Event, {type: T}> extends {payload: infer TPayload} 
    ? [type: T, payload: TPayload]
    : [type: T]
) => {};


sendEvent('LOG_IN', {userId: '10'});
sendEvent('SIGN_OUT')