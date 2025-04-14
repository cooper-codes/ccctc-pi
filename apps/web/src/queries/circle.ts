import { gql } from '@apollo/client';

export const GetArea = gql`
  query GetArea($input: CircleAreaInput!) {
    areaOfCircle(input: $input)
  }
`;