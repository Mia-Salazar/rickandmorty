import { useQuery } from '@tanstack/react-query';

import { fetchCharacter } from './character';

export const useSearchCharacterQuery = (id: number) => {
  const query = useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      const data = await fetchCharacter(id);

      return data;
    },
  });

  return query;
};