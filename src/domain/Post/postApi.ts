import {PageAPI, PageParams, api} from '@api';

import {PostAPI} from './postTypes';

async function getList(params: PageParams): Promise<PageAPI<PostAPI>> {
  //TODO: simular um delay na API
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await api.get<PageAPI<PostAPI>>('user/post', {params});
  return response.data;
}

export const postApi = {
  getList,
};
