import { Avatar, Container, } from "@soperio/ui";



export default function Page({ ...props }) {

  return (
    <Container center size="xxl" dflex gap="20" justifyContent="center" py="20">
      <Avatar src="../assets/photo.jpg" name="Yohan Gerbaud" />
      <Avatar   />
      <Avatar  name="Yohan Gerbaud" />
      <Avatar src="../assets/pho.jpg"  />
      <Avatar src="../assets/pho.jpg" name="Yohan Gerbaud" />
     
      <Avatar src="../assets/photo.jpg" size="xl" name="albin erd" />
      <Avatar src="../assets/photo.jpg" size="x2" name="han baud" corners="square" /> 

    </Container>
  );
}

