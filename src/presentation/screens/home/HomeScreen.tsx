import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {getPokemons} from '../../../actions/pokemons';

export const HomeScreen = () => {
  const {isLoading, data} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60, // 60 minutes
  });
  return (
    <View>
      <Text variant="displaySmall">HomeScreen</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View>{JSON.stringify(data)}</View>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </>
      )}
    </View>
  );
};
