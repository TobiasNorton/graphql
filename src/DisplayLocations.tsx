import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const DisplayLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading........</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.locations.map(
    (location: { id: string; name?: string; description?: string; photo?: string }) => {
      const { id, name, description, photo } = location;
      return (
        <div key={id}>
          <h3>{name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${photo}`} />
          <p>About this location:</p>
          <p>{description}</p>
        </div>
      );
    }
  );
};

export default DisplayLocations;
