import styled from "styled-components"

const Image=styled.img`
  border-radius: 40px;
  width: 100%;
  object-fit: contain;
  margin: 0 auto;
  transform: translateZ(-10px) scale(0.95); 
  transition: transform 0.4s ease, box-shadow 0.4s ease;
`;

const Container=styled.div`

    border: 1px solid var(--color-border);
    border-radius: 20px;
    background-image: linear-gradient(to right, var(--background-color),  var(--color-border),  var(--main-color), #ffffff);
    padding:1rem;
    perspective: 1000px;
`;

function ProfileImage() {

  return (
    <Container>
      <Image src="./profile.jpg" alt="ProfileImage"/>
    </Container>
  )
}

export default ProfileImage
