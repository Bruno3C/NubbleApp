import React, {useState} from 'react';

import {Box, TextMessage} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({}: Props) {
  const [message, setMessage] = useState('');
  return (
    <Box paddingHorizontal="s24">
      <TextMessage
        placeholder="Adicione um comentário"
        onPressSend={() => {}}
        value={message}
        onChangeText={setMessage}
      />
    </Box>
  );
}
