import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TodosController {
    public async index(_ctx: HttpContextContract) {
        return [
            {
                id: 1,
                title: 'Hello world',
            },
            {
                id: 2,
                title: 'Hello universe',
            }
        ]
    }

    public async store(_ctx: HttpContextContract) {
        return {
            "message": "Todo Successfully Created"
        }
    }

    public async view(_ctx: HttpContextContract) {
        return {
            "message": "Todo"
        }
    }

    public async update(_ctx: HttpContextContract) {
        return {
            "message": "Todo Successfully Updated"
        }
    }

    public async delete(_ctx: HttpContextContract) {
        return {
            "message": "Todo Successfully Deleted"
        }
    }
}
