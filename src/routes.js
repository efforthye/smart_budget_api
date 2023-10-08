/**
 * Created by geniuschk on 2023-10-08.
 * request uri 와 컨트롤러 매핑.
 *
 */
import userController from './controllers/user.js';

function routes() {
  app.use('/api/user', userController);
}

export { routes };
