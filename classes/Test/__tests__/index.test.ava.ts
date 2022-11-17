import { Data } from "@retter/rdk"
import { sayHello } from "../index"
import test from 'ava'
import { cloneDeep } from 'lodash'

const getMockedData = (): Data => ({
    context: {
        projectId: 'testProject',
        classId: 'testClassId',
        instanceId: 'testInstanceId',
        identity: 'testIdentity',
        action: 'testAction',
        methodName: 'testMethodName',
        requestId: 'testRequestId',
        sourceIP: 'testSourceIP',
        claims: {
            tags: ['REGIONAL_MANAGER#testInstanceId'],
        },
    },
    state: {
        public: {},
        private: {},
    },
    config: {},
    env: {},
    request: {
        headers: {},
        httpMethod: 'testHttpMethod',
        queryStringParams: {},
    },
    response: {
        statusCode: 200,
    },
    tasks: [],
    version: 0,
} as any)

test.serial('crud', async (t) => {
    const data = cloneDeep(getMockedData())
    data.request.body = { }
    await sayHello(data)
    t.deepEqual(data.response, {
        statusCode: 200,
        body: { message: "Hello World!" },
    })
})