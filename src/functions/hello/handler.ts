import 'source-map-support/register';

import { formatJSONResponse } from '@/libs/apiGateway';
import { middyfy } from '@/libs/lambda';


const hello = async (
) => {
  return formatJSONResponse({
    date: new Date(),
  });
};

export const main = middyfy(hello);
