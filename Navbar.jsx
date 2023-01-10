import Button  from '@chakra-ui/react';
import Link from 'next/link';
import {Manu, ManuButton, ManuList, ManuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react'; 
import {FcManu, FcHome, FcAbout } from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {Fikey} from 'react-icons/fi';

const Navbar = () => (
<Flex p="2" borderButton="1px" borderColor="grey.100">
<Box fontSize="3xl" color="blue.400" fontWeight="bold">
<Link href="/" paddingLeft="2">Realtor</Link>
</Box>
<Spacer/>
<Box>
    <Manu>
        <ManuButton  as={IconButton} icon={<FcManu />} variant="outlined" color="red.400" />
<ManuList>
    <Link href="/" passHref>
    <ManuItem icon={<FcHome/>}>Home</ManuItem>
    </Link>
    <Link href="/search" passHref>
    <ManuItem icon={<BsSearch/>}>Search</ManuItem>
    </Link>
    <Link href="/search?purpose=for-sale" passHref>
    <ManuItem icon={<FcAbout/>}>Buy Property</ManuItem>
    </Link>
    <Link href="/search?purpose=for-rent" passHref>
    <ManuItem icon={<Fikey/>}>Rent Property</ManuItem>
    </Link>
</ManuList>

    </Manu>
</Box>
</Flex>
);

export default Navbar;