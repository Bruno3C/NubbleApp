import {Box, Text} from '@components';
import {Post} from '@domain';
import {Image} from 'react-native';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Image
        source={{uri: author.profileURL}}
        style={{width: 32, height: 32, borderRadius: 14}}
      />
      <Text preset="paragraphMedium" semiBold ml="s12">
        {author.userName}
      </Text>
    </Box>
  );
}
