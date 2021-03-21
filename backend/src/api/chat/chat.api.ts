import { Router } from 'express';
import { ApiPath, HttpCode, ChatsApiPath } from '~/common/enums';
import { chat as chatService } from '~/services/services';

const initChatApi = (apiRouter: Router): Router => {
  const chatRouter = Router();

  apiRouter.use(ApiPath.CHATS, chatRouter);

  chatRouter.get(ChatsApiPath.MEMBERS_$NAME, async (req, res, next) => {
    try {

      const chat = await chatService.getMembersByName(req.params.name);
      res.status(HttpCode.OK).json(chat);
    } catch (error) {
      next(error);
    }
  });

  // chatRouter.post(ChatsApiPath.ROOT, async (req, res, next) => {
  //   try {
  //     const chat = await chatService.createChat(req.body);
  //     res.status(HttpCode.CREATED).json(chat);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // chatRouter.put(ChatsApiPath.$ID, async (req, res, next) => {
  //   try {
  //     const chat = await chatService.updateChat(req.params.id, req.body);
  //     res.status(HttpCode.OK).json(chat);
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  return chatRouter;
};

export { initChatApi };
