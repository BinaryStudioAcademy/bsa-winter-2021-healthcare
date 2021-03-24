import { Router } from 'express';
import { validateSchema } from '~/middlewares';
import { message as validationMessageSchema } from '~/validation-schemas';
import { ApiPath, HttpCode, MessagesApiPath } from '~/common/enums';
import { messages as messagesService } from '~/services/services';

const initMessagesApi = (apiRouter: Router): Router => {
  const messagesRouter = Router();

  apiRouter.use(ApiPath.MESSAGES, messagesRouter);

  messagesRouter.get(MessagesApiPath.MEMBERS_$NAME, async (req, res, next) => {
    try {
      const result = await messagesService.getMembersByName(req.params.name);
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  messagesRouter.get(MessagesApiPath.MESSAGES_$ID, async (req, res, next) => {
    try {
      const result = await messagesService.getMessagesByMemberId(req.params.id, req.user?.id ?? '');
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  messagesRouter.post(MessagesApiPath.MESSAGES, validateSchema(validationMessageSchema), async (req, res, next) => {
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
