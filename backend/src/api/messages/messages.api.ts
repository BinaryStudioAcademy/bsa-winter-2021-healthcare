import { Router } from 'express';
import { validateSchema } from '~/middlewares';
import { message as validationMessageSchema } from '~/validation-schemas';
import { ApiPath, HttpCode, MessagesApiPath } from '~/common/enums';
import { messages as messagesService } from '~/services/services';

const initMessagesApi = (apiRouter: Router): Router => {
  const messagesRouter = Router();

  apiRouter.use(ApiPath.MESSAGES, messagesRouter);

  messagesRouter.get(MessagesApiPath.$TO_USER_ID, async (req, res, next) => {
    try {
      const result = await messagesService.getMessagesByUserId(req.params.toUserId, req.user?.id ?? '');
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  messagesRouter.post(MessagesApiPath.ROOT, validateSchema(validationMessageSchema), async (req, res, next) => {
    try {
      const result = await messagesService.createMessage({ ...req.body, userId: req.user?.id });
      res.status(HttpCode.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  });

  return messagesRouter;
};

export { initMessagesApi };
