import { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Select,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

const SearchFilters = () => {
  return (
    <div>
      <h2>Filters</h2>
    </div>
  );
};

export default SearchFilters;
