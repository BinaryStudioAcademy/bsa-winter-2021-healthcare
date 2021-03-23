import { Router } from 'express';
import { validateSchema } from '~/middlewares';
import { message as validationMessageSchema } from '~/validation-schemas';
import { ApiPath, HttpCode, ChatsApiPath } from '~/common/enums';
import { chat as chatService } from '~/services/services';

const initChatApi = (apiRouter: Router): Router => {
  const chatRouter = Router();

  apiRouter.use(ApiPath.CHATS, chatRouter);

  chatRouter.get(ChatsApiPath.MEMBERS, async (req, res, next) => {
    try {
      const result = await chatService.getMembersAsChats(req.user?.id ?? '');
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  chatRouter.get(ChatsApiPath.MEMBERS_$NAME, async (req, res, next) => {
    try {
      const result = await chatService.getMembersByName(req.params.name);
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  chatRouter.get(ChatsApiPath.MESSAGES_$ID, async (req, res, next) => {
    try {
      const result = await chatService.getMessagesByMemberId(req.params.id, req.user?.id ?? '');
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  chatRouter.post(ChatsApiPath.MESSAGES, validateSchema(validationMessageSchema), async (req, res, next) => {
    try {
      const result = await chatService.createMessage({ ...req.body, userId: req.user?.id });
      res.status(HttpCode.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  });

  return chatRouter;
};

export { initChatApi };
