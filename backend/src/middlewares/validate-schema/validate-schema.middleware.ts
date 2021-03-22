import { AnySchema, ValidationError } from 'yup';
import { Request, Response, NextFunction } from 'express';
import { HttpCode } from '~/common/enums';

const validateSchema = <T extends AnySchema>(schema: T) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  const { body } = req;

  try {
    await schema.validate(body, {
      abortEarly: false,
    });
  } catch (err) {
    if (err instanceof ValidationError) {
      const { errors } = err;

      return res.status(HttpCode.BAD_REQUEST).send({
        messages: errors,
      });
    }
  }

  return next();
};

export { validateSchema };
