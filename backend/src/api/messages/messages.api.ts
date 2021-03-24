import { Router } from 'express';
import { validateSchema } from '~/middlewares';
import { message as validationMessageSchema } from '~/validation-schemas';
import { ApiPath, HttpCode, MessagesApiPath } from '~/common/enums';
import { messages as messagesService } from '~/services/services';

const initMessagesApi = (apiRouter: Router): Router => {
  const chatRouter = Router();

  apiRouter.use(ApiPath.CHATS, chatRouter);

  // chatRouter.get(MessagesApiPath.MEMBERS, async (req, res, next) => {
  //   try {
  //     const result = await messagesService.getMembersAsChats(); //  req.user?.id ?? ''
  //     res.status(HttpCode.OK).json(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  chatRouter.get(MessagesApiPath.MEMBERS_$NAME, async (req, res, next) => {
    try {
      const result = await messagesService.getMembersByName(req.params.name);
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  chatRouter.get(MessagesApiPath.MESSAGES_$ID, async (req, res, next) => {
    try {
      const result = await messagesService.getMessagesByMemberId(req.params.id, req.user?.id ?? '');
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  chatRouter.post(MessagesApiPath.MESSAGES, validateSchema(validationMessageSchema), async (req, res, next) => {
    try {
      const result = await messagesService.createMessage({ ...req.body, userId: req.user?.id });
      res.status(HttpCode.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  });

  return chatRouter;
};

export { initMessagesApi };
