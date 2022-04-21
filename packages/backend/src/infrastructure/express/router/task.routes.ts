import { CreateTaskCommandDTO, TaskDTO } from 'shared'
import express from 'express'
import { CommonRoutesConfig } from './common.routes.config'
import _usersController from '../../../modules/task/task.controller'

const V1 = '/v1'

export class TaskRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  // prettier-ignore
  configureRoutes(): express.Application {
    this.app
    .route(`${V1}/`)
    .get(
        (req: express.Request, res: express.Response) => res.send('Helo World!')
    );

    this.app
      .route(`${V1}/tasks`)
      .get(_usersController.findAll)
      .post(_usersController.createTask)

    this.app
      .route(`${V1}/tasks/:taskId`)
      .get(_usersController.findById)

    return this.app
  }
}
