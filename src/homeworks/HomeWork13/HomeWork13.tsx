import React, { useState, useEffect } from 'react';
import { CatFact } from './types';
import { AppContainer, Button, DataBlock, DataItem } from './styles';
import LoadingSpinner from './LoadingSpinner';

const HomeWork13 = () => {
  const [catFacts, setCatFacts] = useState<CatFact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();
      const newFact: CatFact = result;
      setCatFacts(prevFacts => [...prevFacts, newFact]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally{
        setLoading(false)
    }
  };

  const deleteAllFacts = () => {
    setCatFacts([]);
  };

  const renderFacts = () => {
    if (catFacts.length === 0) {
      return null;
    }

    return (
      <DataBlock>
        {catFacts.map((fact, index) => (
          <DataItem key={index}>
            {fact.fact}
          </DataItem>
        ))}
      </DataBlock>
    );
  };

  return (
    <AppContainer>
      <Button onClick={fetchCatFact}>GET MORE INFO</Button>
      {catFacts.length > 0 && <Button onClick={deleteAllFacts}>DELETE ALL DATA</Button>}
      {loading ? <LoadingSpinner />: renderFacts()}
    </AppContainer>
  );
};

export default HomeWork13;
