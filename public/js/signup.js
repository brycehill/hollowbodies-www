import Task from 'data.task'
import request from 'superagent'

export default function signup(email) {
    return new Task( (reject, resolve) => {
        request.post('/signup')
            .send({ email })
            .end( (err, res) => err ? reject(res.body) : resolve(res.body) )
    })
}
