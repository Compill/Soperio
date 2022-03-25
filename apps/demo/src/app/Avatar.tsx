import { Avatar, Container, } from "@soperio/ui";



export default function Page({ ...props }) {

  return (
    <Container center size="xxl" dflex gap="20" justifyContent="center" py="20">
      <Avatar src="../assets/photo.jpg" name="Yohan Gerbaud" badge badgePosition="centerStart" />
      <Avatar badgePosition="centerEnd" badge />
      <Avatar name="Yohan Gerbaud" badge badgePosition="topStart" corners="pill" />
      <Avatar src="../assets/pho.jpg" badge badgePosition="topEnd" badgeText={5}/>
      <Avatar src="../assets/pho.jpg" name="Yohan Gerbaud"badge  />

      <Avatar src="../assets/photo.jpg" size="xl" name="albin erd" badge  badgeColor="red" />
      <Avatar src="../assets/photo.jpg" size="x2" name="han baud" corners="square"  badge/>

    </Container>
  );
}

