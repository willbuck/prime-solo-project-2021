import errors from './errors.reducer'

describe('Error reducers', () => {
    describe('loginMessage', () => {
        it('should message for login input error', () => {
            const message = errors(undefined, {type: 'LOGIN_INPUT_ERROR'})
            expect(message.loginMessage).toEqual('Enter your username and password!')
        })
    })
})
