import { useState, useEffect } from 'react';

export function Got() {
  const [gotList, setGotList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [characterDetails, setCharacterDetails] = useState({});

  useEffect(() => {
    async function getGotList() {
      const response = await fetch('https://thronesapi.com/api/v2/Characters/');
      const data = await response.json();
      setGotList(data);
      return data;
    }
    getGotList();
  }, []);

  useEffect(() => {
    if (selectedCharacter >= 0) {
      async function getCharacterDetails() {
        const response = await fetch(
          `https://thronesapi.com/api/v2/Characters/${selectedCharacter}`,
        );
        const data = await response.json();
        setCharacterDetails(data);
        return data;
      }
      getCharacterDetails();
    }
  }, [selectedCharacter]);

  const handleCharacterClick = (id) => {
    setSelectedCharacter(id);
  };

  return (
    <div className="flex gap-8">
      <div>
        <h2 className="text-3xl font-bold my-4">Got Characters</h2>
        <ul>
          {gotList.map((item) => (
            <li
              key={item.id}
              data-id={item.id}
              className=" cursor-pointer"
              onClick={() => handleCharacterClick(item.id)}
            >
              {item.fullName}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <h2 className="text-3xl font-bold">Character Details</h2>
          <ul>
            <li>
              <strong>ID:</strong> {characterDetails.id}
            </li>
            <li>
              <strong>First Name:</strong> {characterDetails.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {characterDetails.lastName}
            </li>
            <li>
              <strong>Full Name:</strong> {characterDetails.fullName}
            </li>
            <li>
              <strong>Title:</strong> {characterDetails.title}
            </li>
            <li>
              <strong>Family:</strong> {characterDetails.family}
            </li>
            <li>
              <strong>Image:</strong>{' '}
              <img
                src={characterDetails.imageUrl}
                alt={characterDetails.fullName}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
