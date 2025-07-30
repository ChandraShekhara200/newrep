import React, { useEffect, useState } from 'react'
import Service from '../utils/http'
import { Avatar, Container, Stack ,Text} from '@mantine/core';
const service = new Service();
export default function Myprofile() {
    const [profileData , setProfileData] = useState(null);
    async function getProfileData(){
        let Data = await service.get("user/me");
        setProfileData(Data);
        console.log(Data);
    }
    useEffect(() => {
      getProfileData();
    },[])

  return (
    <Container size={"sm"}>
      <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="center"
      gap="lg"
    >
      <Avatar variant="outline" radius="xl" size="lg" color="rgba(7, 227, 179, 1)" src={profileData?.avatar}></Avatar>;
      <Text tt=""><b>Email :</b>{profileData?.email}</Text>
      <Text tt="capitalize"><b>Name :</b> {profileData?.name}</Text>
      </Stack>
    </Container>
  )
}
